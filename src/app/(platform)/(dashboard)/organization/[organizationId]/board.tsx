import React from 'react';
interface BoardProps {
    title: string;
    id: string

}
const DeleteBoard = ({title,id}:BoardProps) => {
    return (
        <div>
            Board title: {title}
          
        </div>
    );
};

export default DeleteBoard;