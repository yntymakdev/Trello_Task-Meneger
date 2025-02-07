'use client'
import { Button } from "@/app/shared/components/styles/ui/Button";
import { db } from '@/lib/db';
import { create } from "../../../../../../action/create-board/create-board"; // убедитесь, что create — это правильный путь

const OrganizationIdPage = async () => {
    const boards = await db.board.findMany();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const title = formData.get('title') as string;

        // Обработка создания доски
        await create({ title });

        // Можно добавить логику для обновления данных, например, перезагрузки
    };

    return (
        <>
            <div className="flex flex-col space-y-4"></div>
            <form onSubmit={handleSubmit}>
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
                    <div key={board.id}>Board name: {board.title}</div>
                ))}
            </div>
        </>
    );
};

export default OrganizationIdPage;
