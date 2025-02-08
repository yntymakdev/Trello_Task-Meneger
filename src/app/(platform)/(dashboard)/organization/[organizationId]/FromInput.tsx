'use client'
import {useFormStatus} from 'react-dom'
import {Input} from "@/components/ui/input";
interface FormInput{
errors?:{
    title?:string[]
}

}
export  const FromInput ({errors}: FormInput) => {
    const {pending} = useFormStatus()
  return (
    <div>
      <Input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
              disabled={pending}
      />
        {errors?.title && (
            <p className="text-rose-500">{errors.title}</p>
        )}
  
    </div>
  );
};
export default  FromInput


