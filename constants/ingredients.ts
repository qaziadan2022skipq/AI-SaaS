export interface Ingredient {
    icon: string;
    label: string;
  }
  
  export const allIngredients = [
    { icon: "🍅", label: "Personal Life Enhancer", text: `Rachel is here to help you get the most out of life. From providing emotional support to offering tailored advice, Rachel enhances your daily experience, allowing you to enjoy a better quality of life.` },
    { icon: "🥬", label: "Business Productivity Booster", text: "Enhance your business with Rachel's ability to inspire innovative ideas and generate creative solutions. Streamline your operations and increase productivity by up to 80%. With Rachel's help, you're not just saving time; you're also setting the stage for potential revenue growth." },
    { icon: "🧀", label: "Educational Partner", text: "With Rachel, education becomes a conversation. Get direct answers and explore topics from multiple perspectives. Rachel offers an engaging way to learn, more dynamically than traditional search engines or books." },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
    { icon: "🫐", label: "Blueberries" },
    { icon: "🥂", label: "Champers?" }
  ];
  
  const [tomato, lettuce, cheese] = allIngredients;
  export const initialTabs = [tomato, lettuce, cheese];
  
  export function getNextIngredient(
    ingredients: Ingredient[]
  ): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
  }