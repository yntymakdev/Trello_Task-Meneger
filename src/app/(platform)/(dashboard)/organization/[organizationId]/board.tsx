"use-server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface BoardProps {
  title: string;
  id: string;
}

export async function deleteBoard(id: string) {
  await db.board.delete({
    where: {
      id,
    },
  });

  revalidatePath("organization  ");
}
