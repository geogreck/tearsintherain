import { IMoment, ISub, IUser, ILike } from "../models";

export const users: IUser[] =  [
    {
        email: "ya@ya.ru",
        nickname: 'geogreck',
        profile_pic:'logo.png',
        reg_day: new Date(Date.now()),
        rating: 3.43
    }
]

export const moments: IMoment[] = [
    {
        header: "Moscow, Russia",
        content: "Мой первый пост",
        author: "geogreck",
        created_on: new Date(Date.now()),
        image: "logo512.png"
    }
]

export const subbs: ISub[] = [
    {
        author: 'geogreck',
        subscriber: 'tupik',
        subbed_on: new Date('10/9/2022')
    }
]
