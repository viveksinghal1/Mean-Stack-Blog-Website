import { Deserializable } from './deserializable.model';

export class User implements Deserializable {
    public _id: string;
    public username: string;
    public password: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public gender: string;
    public profileImg: string;
    public college: string;
    public course: string;
    public passingYear: string;
    public job: string;
    public company: string;
    public since: string;
    public views: string[];
    public likes: string[];
    public followers: string[];
    
    constructor() {}

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}