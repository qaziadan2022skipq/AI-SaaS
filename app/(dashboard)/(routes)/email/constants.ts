import * as z from "zod";

export const formSchema = z.object({
    emailSays: z.string().min(1, {
        message: "Email Subject is required"
    }),
    recipent: z.string().min(1, {
        message: "Recipent details is required"
    }),
    
})