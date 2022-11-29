export interface ITheme {
    _id: string;
    subscribers: string[];
    themeName: string;
    userId: {
        _id: string;
        username: string;
        email: string;
        posts: string[];
        themes: string[];
        tel: string;
        created_at: string;
        updatedAt: string;
        __v: number;
    };
    created_at: string;
    updatedAt: string;
    __v: number;
}