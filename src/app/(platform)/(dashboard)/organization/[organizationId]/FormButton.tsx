'use client'
import {useFormStatus} from "react-dom";
import {Button} from "@/app/shared/components/styles/ui/Button";

export default function FormButton ()  {
  const {pending} = useFormStatus()
  return (
    <div>
      <Button disabled={pending}  type="submit">

    FormButton
      </Button>

    </div>
  );
};


