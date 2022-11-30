import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { redirect, useLoaderData } from 'react-router'
import Post from '../components/Post'
import { IMoment, ITag } from '../models'

async function getTag(id: number) {
    const response = await axios.get(`http://localhost:8080/api/tags/${id}/moments`)
    console.log(response.data)
    return response.data
}

export async function loader({ params }: any) {
    // console.log(getProfile(params.userId));
    let tag_id = params.tag_id || ''
    return getTag(tag_id)
}

export async function action({ request, params }: any) {
    const formData = await request.formData()
    const updates = Object.fromEntries(formData)
    console.log(updates)
    let tag_id = updates.tagName
    return redirect(`/tag/${tag_id}`)
}

export default function TagRoute() {
    const res = useLoaderData() as any
    let [moments, addMoments] = useState(res as IMoment[])
    let [tag, setTag] = useState<ITag>()

    useEffect(() => {
        if (moments.length > 0)
            axios.get(`http://localhost:8080/api/moments/${moments[0].id}/tags`).then((response) => {
                setTag(response.data[0])
            })
    }, [])

    return (
        <>
            <h1 className="mx-5 my-3">
                {moments.length > 0 ? 'Моменты по тегу ' : 'Моментов с таким тегом не найдено'}
                <span className="text-primary">{tag?.title}</span>
            </h1>
            {moments ? moments.map((moment) => <Post moment={moment} key={moment.id} />) : ''}
        </>
    )
}
