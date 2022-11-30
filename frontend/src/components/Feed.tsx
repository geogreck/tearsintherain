import React, { useEffect, useState } from 'react'
import Post from './Post'
import Pagination from './Pagination'
import { IMoment, ITag } from '../models'
import { Link, NavLink, useLoaderData } from 'react-router-dom'
import { moveSyntheticComments } from 'typescript'
import Moment from '../routes/moment'
import axios from 'axios'

function getTopTags() {
    return fetch('http://localhost:8080/api/tags/hot/').then((response) => {
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

interface FeedProps {
    moments: IMoment[]
    link_to_next?: string
}

function Feed(props: FeedProps) {
    let link_to_next = props.link_to_next
    let [tags, setTags] = useState([] as ITag[])

    useEffect(() => {
        axios.get('http://localhost:8080/api/tags/hot/').then((response) => {
            setTags(response.data.results)
        })
    }, [])
    // console.log(props.moments)
    return (
        <div className="container mb-3">
            <div className="row">
                <div className="col-lg-9">
                    <div className="row text-center my-2">
                        <div className="col">
                            <NavLink
                                to={'/new/reload'}
                                className={({ isActive }) => (isActive ? 'link-secondary h2' : 'h2') + ''}
                            >
                                Новое
                            </NavLink>{' '}
                            {/*Переделать на мои  подписки */}
                        </div>
                        <div className="col">
                            <NavLink
                                className={({ isActive }) => (isActive ? 'link-secondary h2' : 'h2') + ''}
                                to={`/top/reload`}
                            >
                                Популярное
                            </NavLink>
                        </div>
                    </div>
                    <>
                        {props.moments.map((moment) => (
                            <Post moment={moment} key={moment.id} />
                        ))}
                    </>
                </div>
                <div className="col-lg-3 mt-5">
                    <p className="h2">Популярные теги</p>
                    <ul className="list-group h3">
                        {tags.map((tag: ITag) => (
                            <Link to={`/tag/${tag.id}`} className="list-group-item" key={tag.id}>
                                {tag.title}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Feed
