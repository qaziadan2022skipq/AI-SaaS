export const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQs", href: "/faq" },
];

export const testimonials = [
  {
    user: "Emily Parker",
    company: "Personal Companion",
    text: `
    Rachel feels like a friend who’s always there for me. She listens patiently and helps shift my mindset when things aren't going well. Her support keeps me grounded and productive.`,
  },
  {
    user: "Michael Johnson",
    company: "Business Productivity",
    text: `As a project manager, Rachel’s productivity tips and encouraging words have been invaluable. She keeps my team focused and motivated, especially during tight deadlines.`,
  },
  {
    user: "Sophia Martinez",
    company: "Educational Companion",
    text: "Rachel has been a reliable companion throughout my studies. Her positive reinforcement and motivational advice have boosted my confidence and helped me excel academically.",
  },
  {
    user: "Sarah Thompson",
    company: "Personal Support",
    text: "Rachel’s positivity and encouraging nature always brighten my day. She knows how to lift my spirits and help me focus on what matters most. A true friend and companion.",
  },
  {
    user: "Olivia Bennett",
    company: "Professional Encouragement",
    text: "Rachel’s career advice and uplifting messages have given me the confidence to pursue new opportunities. Her encouragement keeps me motivated and focused on my goals.",
  },
  {
    user: "Daniel Lewis",
    company: "Mindset Transformation",
    text: "Rachel’s ability to change my mindset when I’m feeling down is remarkable. She encourages me to stay positive and productive, and I always feel better after our conversations.",
  },
];

interface features {
  icon: string;
  text: string;
  description: string;
}

export const features = [
  {
    icon: `🤍`,
    text: "Chat with Rachel",
    description:
      "Whether you need a friend, help brainstorming business ideas, or assistance revising for your studies, you can count on Rachel to be there 24/7.",
  },
  {
    icon: "2",
    text: "Easy Learning",
    description:
      "Personal tutor providing learning through user-driven queries.",
  },
  {
    icon: "1",
    text: "Image Generator",
    description:
      "Instantly create visually stunning, custom and realistic images.",
  },

  {
    icon: "3",
    text: "Code Generator",
    description:
      "Produce tailored code snippets to speed up your tech projects.",
  },
  {
    icon: "4",
    text: "Email Writer",
    description: "Draft effective emails for any business or personal context.",
  },
  {
    icon: "7",
    text: "Social Captions",
    description: "Generate attarctive and engaging social media captions.",
  },
  {
    icon: "8",
    text: "Text to Speech",
    description: "Convert any text into speech in more than 6 tones.",
  },
  {
    icon: "8",
    text: "Talk to Image",
    description: "Paste the link of the image and start getting info from Rachel",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Rachel Free",
    price: "$0",
    features: ["Limited Usage", "No Support"],
    href: "/sign-in",
  },
  {
    title: "Rachel Pro",
    price: "$20",
    features: ["Unlimited Usage", "Priority Support", "Exclusive Tools"],
    href: "/sign-in",
  },
];

export const resourcesLinks = [
  // { href: "#", text: `Stay up-to-date with Rachel’s latest developments.
  // Subscribe for updates,
  // or contact our support team for more information.` },
  { href: "mailto:Contact@Rachel.app", text: "Contact@Rachel.app" },
];

export const platformLinks = [
  { href: "/#home", text: "Home" },
  { href: "/#features", text: "Features" },
  { href: "/#testimonials", text: "Testimonials" },
  { href: "/#pricing", text: "Pricing" },
  { href: "/faq", text: "FAQs" },
];

export const communityLinks = [
  { href: "#", text: "Facebook" },
  { href: "#", text: "Instagram" },
  { href: "#", text: "Twitter" },
];
