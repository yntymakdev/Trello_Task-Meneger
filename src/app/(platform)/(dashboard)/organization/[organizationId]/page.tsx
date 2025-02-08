
import { Button } from "@/app/shared/components/styles/ui/Button";
import { db } from '@/lib/db';
import { create } from "../../../../../../action/create-board/create-board";
import Board from "@/app/(platform)/(dashboard)/organization/[organizationId]/board"; // убедитесь, что create — это правильный путь

const OrganizationIdPage = async () => {
    const boards = await db.board.findMany();

    // const handleSubmit = async (event: React.FormEvent) => {
    //     event.preventDefau lt();
    //
    //     const formData = new FormData(event.target as HTMLFormElement);
    //     const title = formData.get('title') as string;
    //
    //     await create({ title });
    // };

    return (
        <>
            <div className="flex flex-col space-y-4">

            <form action={create}>
                <input
                    id="title"
                    name="title"
                    required
                    placeholder="Enter a board title"
                    className="border-black border p-1"
                />
                <Button>Добавить</Button>
            </form>

            <div className="space-y-2">
                {boards.map((board) => (
                <Board key={board.id} title={board.title} id={board.id} />
                ))}
            </div>
            </div>
        </>
    );
};

export default OrganizationIdPage;
