import { useLoaderData } from 'react-router-dom'
import Profile from '../components/Profile'
import { IMoment, IUser } from '../models'

function getProfile(userId: number) {
    return fetch(`http://localhost:8080/api/users/${userId}`, {}).then((response) => {
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
    return (
        <>
            <Profile user={user} />
        </>
    )
}
