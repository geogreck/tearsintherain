import { useEffect, useState } from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { IComment, IMoment } from '../models'
import Comment from '../components/Comment'
import axios from 'axios'

function getMoment(moment_id: number) {
    return fetch(`http://localhost:8080/api/moments/${moment_id}`, {}).then((response) => {
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

function getComments(moment_id: number) {
    return fetch(`http://localhost:8080/api/moments/${moment_id}/comments`).then((response) => {
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
    console.log(params.momentId)
    return getMoment(params.momentId)
}

export default function Moment() {
    const moment = useLoaderData() as IMoment
    let [comments, setComments] = useState([] as IComment[])
    useEffect(() => {
        axios.get(`http://localhost:8080/api/moments/${moment.id}/comments`).then(response => {
            setComments(response.data)
        })
    },[])

    return (
        <div className="w-75 border border-primary container my-3 shadow p-3 bg-body rounded">
            <div className="row d-inline">
                <span className="fw-bold border border-secondary rounded mx-3 px-1">{moment.author_name}</span>
                <br />
                <span className="ml-2 px-1"></span>
                {moment.title}
            </div>
            <div className="row">
                <div className="col-3"></div>
                <img src="/logo512.png" alt="" className="col-6" />
                <div className="col-3"></div>
            </div>
            <hr />
            <div className="justify-content-left">
                <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 51.997 51.997"
                    width="20"
                    height={'20'}
                    className="mx-1 my-2"
                >
                    <g>
                        <path
                            d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
                        c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
                        c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
                        C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25
                        c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826
                        c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514
                        c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z"
                        />
                    </g>
                </svg>
                <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 465 465"
                    width="20"
                    height={'20'}
                    className="mx-1"
                >
                    <path
                        d="M370.656,290.363c-30.818,0-57.958,16.049-73.502,40.227l-122.311-64.265c4.39-10.408,6.819-21.838,6.819-33.824
                        s-2.429-23.416-6.819-33.824l122.311-64.265c15.545,24.178,42.684,40.227,73.502,40.227c48.148,0,87.319-39.171,87.319-87.318
                        C457.975,39.171,418.804,0,370.656,0c-48.147,0-87.318,39.171-87.318,87.319c0,11.987,2.429,23.416,6.819,33.824l-122.311,64.265
                        c-15.545-24.178-42.684-40.227-73.502-40.227c-48.147,0-87.318,39.171-87.318,87.319s39.171,87.319,87.318,87.319
                        c30.818,0,57.958-16.049,73.502-40.227l122.311,64.265c-4.39,10.408-6.819,21.838-6.819,33.824
                        c0,48.148,39.171,87.319,87.318,87.319c48.148,0,87.319-39.171,87.319-87.319C457.975,329.534,418.804,290.363,370.656,290.363z
                        M370.656,15c39.877,0,72.319,32.442,72.319,72.319c0,39.876-32.442,72.318-72.319,72.318s-72.318-32.442-72.318-72.318
                        C298.337,47.442,330.779,15,370.656,15z M94.343,304.819c-39.876,0-72.318-32.442-72.318-72.319s32.442-72.319,72.318-72.319
                        s72.318,32.442,72.318,72.319S134.219,304.819,94.343,304.819z M370.656,450c-39.877,0-72.318-32.442-72.318-72.319
                        c0-39.876,32.441-72.318,72.318-72.318s72.319,32.442,72.319,72.318C442.975,417.558,410.533,450,370.656,450z"
                    />
                </svg>
            </div>
            <div className="row">
                <span className="fw-bold">raiting: {moment.raiting}</span>
            </div>
            <div className="row d-inline">
                <span className="fw-bold">{moment.author_name}</span> {moment.description}
            </div>
            <hr />
            <div className="d-block">
                {comments ? comments.map((comment) => <Comment key={comment.id} comment={comment} />) : ''}
            </div>
        </div>
    )
}
