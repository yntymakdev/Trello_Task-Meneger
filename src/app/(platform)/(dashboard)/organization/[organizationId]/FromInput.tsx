'use client'
import { useFormStatus } from 'react-dom';
import { Input } from "@/components/ui/input";

interface FormInputProps {
    errors?: {
        title?: string;
    };
}

const FromInput: React.FC<FormInputProps> = ({ errors }) => {
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
            {errors?.title && (
                <p className="text-rose-500">{errors.title}</p>
            )}
        </div>
    );
};

export default FromInput;
