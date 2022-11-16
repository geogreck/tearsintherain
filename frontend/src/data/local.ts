import { IMoment, ISub, IUser, ILike } from "../models";

export const users: IUser[] =  [
    {
        email: "ya@ya.ru",
        nickname: 'geogreck',
        profile_pic:'logo.png',
        registration_date: new Date(Date.now()),
        rating: 3.43
    }
]

export const subbs: ISub[] = [
    {
        author: 'geogreck',
        subscriber: 'tupik',
        subbed_on: new Date('10/9/2022')
    }
]
