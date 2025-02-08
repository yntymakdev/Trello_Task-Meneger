'use client'
import { create } from "../../../../../../action/create-board/create-board";
import { Button } from "@/app/shared/components/styles/ui/Button";
import { useFormState } from "react-dom";

export default function Form() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(create, initialState);

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
                    {state?.errors?.title && (
                        <p className="text-rose-500">{state.errors.title}</p>
                    )}
                    <Button>Добавить</Button>
                </div>
            </form>
        </div>
    );
}
