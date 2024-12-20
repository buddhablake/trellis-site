"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ASSESSMENT_QUESTIONS } from "@/types/assessment";
import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionCard";

interface Answers {
  [key: number]: string;
}

export function AssessmentForm() {
  const searchParams = useSearchParams();
  const pageId = searchParams.get("id");
  const email = searchParams.get("email");
  const firstName = searchParams.get("firstName");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(() => {
    // Try to load saved answers from localStorage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`assessment-${pageId}`);
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Save answers to localStorage whenever they change
  useEffect(() => {
    if (pageId) {
      localStorage.setItem(`assessment-${pageId}`, JSON.stringify(answers));
    }
  }, [answers, pageId]);

  if (!pageId) {
    return (
      <div className="p-4">
        <h1 className="text-xl text-red-600">
          Error: No assessment ID provided
        </h1>
        <p>Please use the link provided in your email.</p>
      </div>
    );
  }

  const handleAnswerChange = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [ASSESSMENT_QUESTIONS[currentQuestionIndex].id]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Format answers as an array of question-answer pairs
      const formattedAnswers = ASSESSMENT_QUESTIONS.map((q) => ({
        question: q.text,
        answer: answers[q.id] || "*No answer provided*",
      }));

      // First, update the assessment in Notion
      const response = await fetch("/api/update-assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pageId,
          answers: formattedAnswers,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit assessment");
      }

      // Then, send the completion email
      const emailResponse = await fetch("/api/send-assessment-completion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: decodeURIComponent(email!),
          firstName: decodeURIComponent(firstName!),
        }),
      });

      if (!emailResponse.ok) {
        console.error("Failed to send completion email");
        // Continue with redirect even if email fails
      }

      // Clear localStorage after successful submission
      localStorage.removeItem(`assessment-${pageId}`);

      // Redirect to success page
      window.location.href = "/assessment-complete";
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while submitting"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentQuestion = ASSESSMENT_QUESTIONS[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <ProgressBar
        current={currentQuestionIndex + 1}
        total={ASSESSMENT_QUESTIONS.length}
      />

      <QuestionCard
        question={currentQuestion.text}
        guidance={currentQuestion.guidance}
        answer={answers[currentQuestion.id] || ""}
        onAnswerChange={handleAnswerChange}
        isLastQuestion={
          currentQuestionIndex === ASSESSMENT_QUESTIONS.length - 1
        }
        onNext={handleNext}
        onPrevious={handlePrevious}
        onSubmit={handleSubmit}
        currentQuestion={currentQuestionIndex + 1}
        isSubmitting={isSubmitting}
      />

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-600 rounded">{error}</div>
      )}
    </div>
  );
}
