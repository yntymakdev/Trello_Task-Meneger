import { db } from '@/lib/db';
import Board from "@/app/(platform)/(dashboard)/organization/[organizationId]/board";
import Form from "@/app/(platform)/(dashboard)/organization/[organizationId]/form"; // убедитесь, что create — это правильный путь

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

    // @ts-ignore
    return (
        <>
            <div className="flex flex-col space-y-4">
            <Form/>
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
