import { useLoaderData } from 'react-router-dom'
import Profile from '../components/Profile'
import { IMoment, IUser } from '../models'

function getProfile(userId: number) {
    return fetch(`https://json.grechkogv.ru/users/${userId}`, {}).then((response) => {
        if (response.ok) {
            return response.json()
        }
        return response.json().then((error) => {
            const e = new Error('Пиво')
            e.message = error
            throw e
        })
    })
}

export async function loader({ params }: any) {
    // console.log(getProfile(params.userId));
    return getProfile(params.userId)
}

export default function ProfileRoute() {
    const user = useLoaderData() as IUser
    user.registration_date = new Date(user.registration_date)
    const user_moments = [{
        header: "Moscow, Russia",
        content: "Мой первый пост",
        author: "geogreck",
        created_on: new Date(Date.now()),
        image: "logo512.png"
    }]
    return (
        <>
            <Profile moments={user_moments} user={user} />
        </>
    )
}
