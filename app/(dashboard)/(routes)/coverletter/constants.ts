import * as z from "zod";

export const formSchema = z.object({
  job_role: z.string().min(1, {
    message: "Image prompt is required",
  }),
  job_skills: z.string().min(1, {
    message: "Image prompt is required",
  }),
  creativity: z.string().min(1),
  results: z.string().min(1),
});

export const creativityOptions = [
  {
    value: "high",
    label: "High",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "low",
    label: "Low",
  },
];

export const resultsOptions = [
    {
      value: "1",
      label: "1 Variant",
    },
    {
      value: "2",
      label: "2 Variants",
    },
    {
      value: "3",
      label: "3 Variants",
    },
  ];