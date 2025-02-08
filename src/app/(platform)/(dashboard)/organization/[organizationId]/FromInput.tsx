'use client'
import { useFormStatus } from 'react-dom';
import { Input } from "@/components/ui/input";

interface FormInputProps {
    errors?: {
        title?: string[];
    };
}

const FromInput: React.FC<FormInputProps> = ({ errors }: FormInputProps) => {
    const { pending } = useFormStatus();

    return (
        <div>
            <Input
                id="title"
                name="title"
                required
                placeholder="Enter a board title"
                disabled={pending}
            />
            {errors?.title?.map((error: string) => (
                <p key={error} className="text-rose-500">{error}</p>
            ))}
        </div>
    );
};

export default FromInput;
