
'use server'
import {db} from "@/lib/db";
const CreateBoard=z.object({
    title:z.string(),
})
 export      async function create(formData: FormData){
    const {title} = CreateBoard.ettitle") as string;
    await  db.board.create({
        data: {
            title
        }
    })
 }