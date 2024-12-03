import { GuidanceText } from "./GuidanceText";
import { useState } from "react";

interface QuestionCardProps {
  question: string;
  guidance: string;
  answer: string;
  onAnswerChange: (answer: string) => void;
  isLastQuestion: boolean;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  currentQuestion: number;
  totalQuestions: number;
}

export function QuestionCard({
  question,
  guidance,
  answer,
  onAnswerChange,
  isLastQuestion,
  onNext,
  onPrevious,
  onSubmit,
  currentQuestion,
  totalQuestions,
}: QuestionCardProps) {
  const [showEncouragement, setShowEncouragement] = useState(false);
  const MIN_CHARS = 100;

  const handleNext = () => {
    if (answer.length < MIN_CHARS) {
      setShowEncouragement(true);
      return;
    }
    setShowEncouragement(false);
    onNext();
  };

  const handleSubmit = () => {
    if (answer.length < MIN_CHARS) {
      setShowEncouragement(true);
      return;
    }
    setShowEncouragement(false);
    onSubmit();
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{question}</h2>
      <GuidanceText text={guidance} />

      <textarea
        value={answer}
        onChange={(e) => {
          onAnswerChange(e.target.value);
          if (e.target.value.length >= MIN_CHARS) {
            setShowEncouragement(false);
          }
        }}
        className="w-full h-48 p-4 border rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
        placeholder="Share your thoughts..."
      />

      {showEncouragement && (
        <div className="mt-2 text-amber-600">
          <p>
            Your insights are valuable! Could you elaborate a bit more? The more
            detail you provide, the better we can understand your unique
            situation.
          </p>
        </div>
      )}

      <div className="flex justify-between mt-6">
        <button
          onClick={onPrevious}
          disabled={currentQuestion === 1}
          className="px-6 py-2 text-forest border border-forest rounded hover:bg-forest/5 disabled:opacity-50 disabled:hover:bg-transparent"
        >
          Previous
        </button>

        {!isLastQuestion ? (
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-forest text-white rounded hover:bg-forest/90"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-forest text-white rounded hover:bg-forest/90"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
