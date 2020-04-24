import { Deserializable } from './deserializable.model';
import { User } from './user.model';

export class Article implements Deserializable {

    public _id: string;
    public title: string;
    public slug: string;
    public caption: string;
    public content: string;
    public timeCreated: string;
    public author: string;
    public category: string;
    public likes: User[];
    public dislikes: User[];
    public views: User[];

    constructor() {}

    deserialize(input: any): this {
        Object.assign(this, input);
        
        this.likes = input.likes.map(like => new User().deserialize(like));
        this.dislikes = input.dislikes.map(dislike => new User().deserialize(dislike));
        this.views = input.views.map(view => new User().deserialize(view));

        return this;
    }

}