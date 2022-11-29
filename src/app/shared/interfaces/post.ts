export interface IPost {
    _id: string;
    text: string;
    likes: string[];
    themeId: {
        _id: string;
        themeName: string;
        userId: string;
        posts: string[];
        subscribers: string[];
        created_at: string;
        updatedAt: string;
    };
    userId: {
        _id: string;
        username: string;
        email: string;
        tel: string;
        themes: string[];
        posts: string[];
        created_at: string;
        updatedAt: string;
    };
    created_at: string;
    updatedAt: string;
    __v: number
}