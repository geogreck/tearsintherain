export interface IUser {
    email: string
    nickname: string
    profile_pic: string
    registration_date: Date
    rating: number
}

export interface IMoment {
    id: number
    title: string
    description: string
    author: number
    author_name: string
    created_on: Date
    image_src: string
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
