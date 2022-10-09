export interface IUser {
    email: string
    nickname: string
    profile_pic: string
    reg_day: Date
    rating: number
}

export interface IMoment {
    header: string
    content: string
    author: string
    created_on: Date
    image: string
}