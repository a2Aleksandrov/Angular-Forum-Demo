export interface ICreateUser {
    _id: string;
    username: string;
    email: string;
    tel: string;
    password: string;
}

export interface ILogInUser {
     email: string;
     username: string;
     password: string;
}