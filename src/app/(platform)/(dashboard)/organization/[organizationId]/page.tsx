import { Button } from "@/app/shared/components/styles/ui/Button";
import  {db} from '@/lib/db'
import {create} from "@/actions/create-board";
const OrganizationIdPage = async () => {
  const board = await db.board.findMany();

  return (
    <>
      <div className="flex flex-col  space-y-4"></div>
       <form action={create}>
       <input id="title" name="title" required placeholder="Enter a board title" className="border-black border p-1" />
      <Button>Добавить</Button>
       </form>
       <div className="space-y-2">
        {board.map((board) => (
          <div key={board.id}>Board name: {board.title}</div>
         ))}
       </div>
    </>
  );
};

export default OrganizationIdPage;
