import { useState } from 'react'
import { useLoaderData } from 'react-router'
import Feed from '../components/Feed'
import Pagination from '../components/Pagination'
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
type link = {
    next: string
    prev?: string
}

export default function FeedRoute() {
    const res = useLoaderData() as any
    let [moments, addMoments] = useState(res.results as IMoment[])
    let [link, setLink] = useState({ next: res.next as string } as link)
    if (moments) console.log(link.next)

    let loadMore = async () => {
        let result = await fetch(link.next)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                return response.json().then((error) => {
                    const e = new Error('Пиво')
                    e.message = error
                    throw e
                })
            })
            .then((result) => {
                return result
            })
        console.log({next:result.next})
        setLink({next:result.next})
        console.log(link)
        let new_data: IMoment[] = result.results
        addMoments(moments.concat(new_data))
    }
    return (
        <>
            <Feed moments={moments} />
            <button className="btn btn-primary fs-strong w-50 col-sm-4  mx-auto mb-5 " onClick={() => loadMore()}>
                Загрузить ещё
            </button>
        </>
    )
}
