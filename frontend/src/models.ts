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

export interface IComment {
    author: string
    content: string
    created_on: Date
}

export interface ISub {
    author: string
    subscriber: string
    subbed_on: Date
}

export interface ILike {
    author: string
    target: IMoment | IComment
    liked_on: Date
}

export interface ITags {
    related_tags: IMoment[]
    name: string
}