'use client'
import { create } from "../../../../../../action/create-board/create-board";
import { useFormState } from "react-dom";
import FormButton from "@/app/(platform)/(dashboard)/organization/[organizationId]/FormButton";
import FromInput from "@/app/(platform)/(dashboard)/organization/[organizationId]/FromInput";

export default function Form() {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(create, initialState);

    return (
        <div>
            <form action={dispatch}>
                <div className='flex flex-col space-y-2'>
                   <FromInput/>
                   <FormButton/>
                </div>
            </form>
        </div>
    );
}
