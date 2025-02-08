'use client'
import {create} from "../../../../../../action/create-board/create-board";
import {Button} from "@/app/shared/components/styles/ui/Button";

export default function form ()  {
  return (
    <div>

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
  
    </div>
  );
};


