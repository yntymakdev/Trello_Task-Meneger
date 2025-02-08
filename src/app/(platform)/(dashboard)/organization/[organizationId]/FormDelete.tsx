'use client'
import {Button} from "@/app/shared/components/styles/ui/Button";
import React from "react";
import {useFormStatus} from "react-dom";

export default function FormDelete ()  {
    const {pending} = useFormStatus()
  return (
    <div>
      <Button disabled={pending} typeof='submit' variant='destructive' size='sm'>
        Delete
      </Button>
  
    </div>
  );
};


