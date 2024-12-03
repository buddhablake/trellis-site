"use client";

import { Suspense } from "react";
import { AssessmentForm } from "@/components/assessment/AssessmentForm";

export default function Assessment() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        <AssessmentForm />
      </Suspense>
    </div>
  );
}
