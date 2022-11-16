import { useLoaderData } from 'react-router'
import Feed from '../components/Feed'
import { IMoment } from '../models'

function getFeed(filter?: string) {
    return fetch(`http://localhost:8080/api/moments/${filter ? filter : ''}`).then((response) => {
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
    let filter = params.filter || ''
    return getFeed(filter)
}

export default function FeedRoute() {
    const moments = useLoaderData() as any
    console.log(moments)
    return <Feed moments={moments.results as IMoment[]} />
}
