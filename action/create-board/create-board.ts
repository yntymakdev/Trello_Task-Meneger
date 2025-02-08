'use server'
import { db } from "@/lib/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
    errors?: {
        title?: string;
    };
    message?: string | null;
};

const CreateBoard = z.object({
    title: z.string().min(3, {
        message: "Minimum length of 3 letters is required",
    }),
});

export async function create(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = CreateBoard.safeParse({
        title: formData.get("title"),
    });

    if (!validatedFields.success) {
        return {
            errors: {
                title: validatedFields.error.flatten().fieldErrors.title?.[0], // ✅ Берём только первую ошибку
            },
            message: "Missing fields",
        };
    }

    const { title } = validatedFields.data;

    try {
        await db.board.create({
            data: {
                title,
            },
        });

        revalidatePath('/organization/org_2sTYvRxYpztHhF6Wo3dOPfIf0er');
        redirect("/organization/org_2sTYvRxYpztHhF6Wo3dOPfIf0er");

        return { message: "Board created successfully" }; // ✅ Вернём успех, если не редиректит
    } catch (error) {
        return {
            message: "Database Error",
        };
    }
}
