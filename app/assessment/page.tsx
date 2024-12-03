"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function AssessmentContent() {
  const searchParams = useSearchParams();
  const pageId = searchParams.get("id");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

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

  const handleTestUpdate = async () => {
    setStatus("loading");
    setError(null);

    try {
      const response = await fetch("/api/update-assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pageId,
          message: `Page has been updated with page ID: ${pageId}`,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to update assessment");
      }

      setStatus("success");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setStatus("error");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Assessment Page</h1>
      <p className="mb-4">Page ID: {pageId}</p>

      <button
        onClick={handleTestUpdate}
        disabled={status === "loading"}
        className="bg-forest text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {status === "loading" ? "Updating..." : "Test Update"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-green-600">Successfully updated the page!</p>
      )}

      {error && <p className="mt-4 text-red-600">Error: {error}</p>}
    </div>
  );
}

export default function AssessmentPage() {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <AssessmentContent />
    </Suspense>
  );
}
