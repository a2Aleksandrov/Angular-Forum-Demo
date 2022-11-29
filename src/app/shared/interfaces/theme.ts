export interface ITheme {
    _id: string;
    subscribers: string[];
    themeName: string;
    posts: {
        _id: string;
        text: string;
        likes: string[];
        themeId: string;
        userId: {
            _id: string;
            username: string;
            email: string;
            tel: string;
            themes: string[];
        };
        created_at: string;
        updatedAt: string;
    }[];
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