export interface Question {
  id: number;
  text: string;
  guidance: string;
}

export const ASSESSMENT_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "When you talk about your business, what do you find hardest to explain?",
    guidance:
      "Think about conversations where you've struggled to convey your value. What aspects feel unclear or complex? Share specific examples if possible.",
  },
  {
    id: 2,
    text: "What's the biggest difference between how you imagined your business and how it actually is?",
    guidance:
      "Consider both practical and emotional aspects. What surprises, challenges, or unexpected realizations have you encountered?",
  },
  {
    id: 3,
    text: "Think of your best client relationship - what makes it work so well?",
    guidance:
      "Describe the relationship dynamics, communication patterns, and what makes this client different from others.",
  },
  {
    id: 4,
    text: "Where do you feel pressure to be something you're not in your business?",
    guidance:
      "Consider industry standards, competitor approaches, or market expectations that feel misaligned with your values.",
  },
  {
    id: 5,
    text: "What would make you feel truly successful beyond revenue?",
    guidance:
      "Think about personal fulfillment, community impact, and long-term vision. What would make you proud?",
  },
  {
    id: 6,
    text: "How has your business grown so far, and what feels natural or forced about that growth?",
    guidance:
      "Think about the different ways your business has evolved - not just in size, but in capabilities, relationships, and impact. What growth felt natural? What felt forced?",
  },
  {
    id: 7,
    text: "How does your business currently interact with your larger community?",
    guidance:
      "Think about relationships with other businesses, community organizations, and your local ecosystem.",
  },
  {
    id: 8,
    text: "What existing resources or strengths do you feel are underutilized in your business?",
    guidance:
      "Consider skills, relationships, tools, or knowledge that could be better leveraged.",
  },
  {
    id: 9,
    text: "When you imagine your business three years from now, what does sustainable success look like?",
    guidance:
      "Paint a picture of your ideal future state, considering both business health and personal fulfillment.",
  },
];
