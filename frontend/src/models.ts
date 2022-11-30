export interface IUser {
    id: number
    email: string
    nickname: string
    profile_pic: string
    registration_date: Date
}

export interface IMoment {
    id: number
    title: string
    description: string
    author: number
    author_name: string
    created_on: Date
    image_src: string
    raiting: number
}

export interface IComment {
    id: number
    text: string
    author: number
    author_name: string
    target: number
    target_name: string
    created_on: Date
    raiting: number
}

export interface ISub {
    id: number
    author: number
    author_name: string
    target: number
    target_name: string
    subbed_on: Date
}

export interface IMomentLike {
    id: number
    author: number
    target: number
    author_name: string
    target_name: string
    created_on: Date
}

export interface ICommentLike {
    id: number
    author: number
    target: number
    author_name: string
    target_name: string
    created_on: Date
}

export interface ITag {
    id: number
    title: string
    raitng: number
}
