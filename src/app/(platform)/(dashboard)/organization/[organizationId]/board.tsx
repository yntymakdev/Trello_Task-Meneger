import React from 'react';
import {Button} from "@/app/shared/components/styles/ui/Button";
interface BoardProps {
    title: string;
    id: string

}
const DeleteBoard = ({title,id}:BoardProps) => {
    return (
        <form className='flex items-center gap-x-2'>
<p>
    Board title: {title}
</p>
            <Button typeof='submit' variant='destructive' size='sm'>
                Delete
            </Button>

        </form>
    );
};

export default DeleteBoard;