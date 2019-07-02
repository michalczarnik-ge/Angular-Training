import { IUser } from 'src/app/users/interfaces/user.interface';

export interface IPost {
    id:     string;
    body:   string;
    created_time: string;
    author: IUser;
    images: Array<string>;
}