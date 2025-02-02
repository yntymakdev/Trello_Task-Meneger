import { Button } from "@/app/shared/components/styles/ui/Button";
import { create } from "../../../../../../action/creat-boart";
import { db } from "@/lib/db";

const OrganizationId = async () => {
  const boards = await db.board.findMany();

  return (
    <form action={create}>
      <input id="title" name="title" required placeholder="Enter a board title" className="border-black border p-1" />
      <Button>as</Button>
    </form>
<div className="space-y-2">

  
</div>

  );
};

export default OrganizationId;
