import { create } from "../../../../../../action/creat-boart";

const OrganizationId = () => {
  return (
    <form action={create}>
      <input id="title" name="title" required placeholder="Enter a board title" className="border-black border p-1" />
    </form>
  );
};

export default OrganizationId;
