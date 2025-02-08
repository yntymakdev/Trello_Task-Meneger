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
          <div className='flex flex-col space-y-2'>

        <input
            id="title"
            name="title"
            required
            placeholder="Enter a board title"
            className="border-black border p-1"
        />
              {state?.errors?.title?(
                  <div>
                      {state?.errors?.title.map((error: string)=> (
                          <p key={error} className='text-rose-500'>
                              {error}

                          </p>
                      ))}
                  </div>
              )}

        <Button>Добавить</Button>
          </div>
      </form>

    </div>
  );
};


