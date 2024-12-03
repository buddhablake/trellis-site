export default function AssessmentComplete() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold text-forest mb-6">
        Assessment Submitted Successfully
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-sm">
        <p className="text-xl mb-6">
          Thank you for completing your assessment. We've received your
          responses and will review them carefully.
        </p>

        <p className="text-gray-600 mb-8">
          We'll be in touch soon to discuss your insights and explore how we can
          help your business grow.
        </p>

        <a
          href="/"
          className="inline-block px-6 py-3 bg-forest text-white rounded hover:bg-forest/90 transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
