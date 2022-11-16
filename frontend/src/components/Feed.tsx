import React from 'react'
import Post from './Post'
import Pagination from './Pagination'
import { IMoment } from '../models'
import { useLoaderData } from 'react-router-dom'

interface FeedProps {
    moments: IMoment[]
}

function Feed(props: FeedProps) {
    return (
        <main className="container mb-3">
            <div className="row">
                <div className="col-lg-10">
                    <div className="row text-center my-2">
                        <div className="col">
                            <a className="h2 link">Мои подписки</a>
                        </div>
                        <div className="col">
                            <a className="h2">Популярное</a>
                        </div>
                    </div>
                    <>
                    {props.moments.map(moment => <Post moment={moment} key={moment.id}/>)}
                    </>
                </div>
                <div className="col-lg-2 mt-5">
                    <p className="h2">Популярные теги</p>
                    <ul className="list-group h3">
                        <li className="list-group-item">Тупики</li>
                        <li className="list-group-item">Реакт</li>
                        <li className="list-group-item">Вячеслав Локшин</li>
                        <li className="list-group-item">Артас</li>
                        <li className="list-group-item">Программист</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <Pagination />
            </div>
        </main>
    )
}

export default Feed
