import * as z from "zod";

export const formSchema = z.object({
    emailTo: z.string().min(1, {
        message: "Prompt is required"
    }),
    companyName: z.string().min(1, {
        message: "Prompt is required"
    }),
    companyDomain: z.string().min(1, {
        message: "Tone is required"
    }),
    leaveDays: z.string().min(1, {
        message: "Tone is required"
    }),
    reason: z.string().min(1, {
        message: "Tone is required"
    })
})