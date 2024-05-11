import * as z from "zod";

export const formSchema = z.object({
    prompt: z.string().min(1, {
        message: "Prompt is required"
    }),
    imageUrl: z.string().min(1, {
        message: "Image_Url is required"
    })
})