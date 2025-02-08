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
        // Берём первую ошибку по полю title
        return {
            errors: {
                title: validatedFields.error.flatten().fieldErrors.title?.[0],
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

        // Переход после успешного создания записи
        revalidatePath('/organization/org_2sTYvRxYpztHhF6Wo3dOPfIf0er');

        // Вернуть сообщение о создании
        return {
            message: "Board created successfully",
        };

    } catch (error) {
        // Логирование или более подробное сообщение об ошибке
        console.error("Error creating board:", error);

        return {
            message: "Database Error",
        };
    } finally {
        // В идеале редирект можно выполнить в компонентах клиентской стороны, а не в серверных функциях
        redirect("/organization/org_2sTYvRxYpztHhF6Wo3dOPfIf0er");
    }
}
