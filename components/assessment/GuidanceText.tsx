interface GuidanceTextProps {
  text: string;
}

export function GuidanceText({ text }: GuidanceTextProps) {
  return (
    <div className="bg-forest/5 border-l-4 border-forest p-4 my-4 rounded">
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
}
