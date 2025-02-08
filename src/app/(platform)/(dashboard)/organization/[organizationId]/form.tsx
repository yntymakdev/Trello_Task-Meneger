'use client'
import { create } from "../../../../../../action/create-board/create-board";
import { useActionState } from "react";
import FormButton from "@/app/(platform)/(dashboard)/organization/[organizationId]/FormButton";
import FromInput from "@/app/(platform)/(dashboard)/organization/[organizationId]/FromInput";

export default function Form() {
    const initialState = { message: '', errors: {} };
    const [state, dispatch] = useActionState(create, initialState);

    return (
        <div>
            <form action={dispatch}>
                <div className='flex flex-col space-y-2'>
                   <FromInput errors={state?.errors}/>
                </div>
                   <FormButton/>
            </form>
        </div>
    );
}
