import { User } from "./user";

export class Publication {

    id!: number;
    title!: string;
    publication_txt!: string;
    user:User;
    like_count!: number;
    dislike_count!:number;
    commentsNumber!:number;  
    createdAt:Date;
    pic:any;
}
