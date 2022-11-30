import axios from 'axios'
import react, { useEffect, useState } from 'react'
import EventComp from '../components/EventComp'
import { IMomentLike, ICommentLike, ISub } from '../models'

export default function NotificationsRoute() {
    let [momentLikesBuf, addMomentLikes] = useState<IMomentLike[]>([])
    let [commentLikesBuf, addCommentLikes] = useState<ICommentLike[]>([])
    let [subsBuf, addSubs] = useState<ISub[]>([])

    let res = window.sessionStorage.getItem('user_id')
    let user_id = JSON.parse(res!)

    useEffect(() => {
        axios.get(`http://localhost:8080/api/moments/likes/users/${user_id}`).then((response) => {
            addMomentLikes(momentLikesBuf.concat(response.data.results))
        })
        axios.get(`http://localhost:8080/api/comments/likes/users/${user_id}`).then((response) => {
            addCommentLikes(commentLikesBuf.concat(response.data.results))
        })
        axios.get(`http://localhost:8080/api/users/${user_id}/followers`).then((response) => {
            console.log(response.data.results)
            addSubs(subsBuf.concat(response.data.results))
        })
    }, [])

    let [path, setPath] = useState('subs')

    window.addEventListener('hashchange', function (e) {
        setPath(window.location.hash.substr(1).replace('#', ''))
    })

    return (
        <>
            <div className="container mx-auto my-3">
                <div className="row">
                    <div className="col-1"></div>
                    <a href="#moments" className="col-3 h3 text-center">
                        Лайки на моменты
                    </a>
                    <a href="#comments" className="col-4 h3 text-center">
                        Лайки на комментарии
                    </a>
                    <a href="#subs" className="col-3 h3 text-center">
                        Подписки
                    </a>
                    <div className="col-1"></div>
                </div>
            </div>
            {path === 'moments'
                ? momentLikesBuf?.map((event) => <EventComp event={event} key={event.id} type={'momentLike'} />)
                : ''}
            {path === 'comments'
                ? commentLikesBuf?.map((event) => <EventComp event={event} key={event.id} type={'commentLike'} />)
                : ''}
            {path === 'subs' ? subsBuf?.map((event) => <EventComp event={event} key={event.id} type={'sub'} />) : ''}
        </>
    )
}
