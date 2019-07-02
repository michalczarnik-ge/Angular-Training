import { IUser } from 'src/app/users/interfaces/user.interface';

export interface IComment {
    id: string;
    body:string;
    created_time: string;
    author: IUser;
}
