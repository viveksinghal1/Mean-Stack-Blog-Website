export class Article {

    constructor(
        public _id: string,
        public title: string,
        slug: string,
        caption: string,
        content: string,
        timeCreated: string,
        author: string,
        category: string,
        likes: string[],
        dislikes: string[],
        views: string[]
    ) {}
}