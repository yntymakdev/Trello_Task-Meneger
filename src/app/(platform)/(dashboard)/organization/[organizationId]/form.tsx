'use client'
import { create } from "../../../../../../action/create-board/create-board";
import { Button } from "@/app/shared/components/styles/ui/Button";
import { useFormState } from "react-dom";
import {FormInput} from "lucide-react";

export default function Form() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(create, initialState);

    return (
        <div>
            <form action={dispatch}>
                <div className='flex flex-col space-y-2'>
                   <FormInput/>
                    <Button>Добавить</Button>
                </div>
            </form>
        </div>
    );
}
