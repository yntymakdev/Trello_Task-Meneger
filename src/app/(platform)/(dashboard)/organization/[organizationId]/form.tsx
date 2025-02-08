'use client'
import {create} from "../../../../../../action/create-board/create-board";
import {Button} from "@/app/shared/components/styles/ui/Button";
import  {useFormState } from "react-dom"
export default function form ()  {

    const initialState = {message:null,error:{}};
    const [state,dispatch] = useFormState(create,initialState);

  return (
    <div>

      <form action={dispatch}>
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


