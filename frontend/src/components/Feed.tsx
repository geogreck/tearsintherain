import React from 'react'
import Post from './Post'
import { users, moments } from '../data/local'
import Pagination from './Pagination'

function Feed() {
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
                    <Post user={users[0]} moment={moments[0]} />
                    <Post user={users[0]} moment={moments[0]} />
                    <Post user={users[0]} moment={moments[0]} />
                    <Post user={users[0]} moment={moments[0]} />
                </div>
                <div className="col-lg-2 mt-5">
                    <p className='h2'>Популярные теги</p>
                    <ul className="list-group h3">
                        <li className="list-group-item">Тупики</li>
                        <li className="list-group-item">Гнатэнко</li>
                        <li className="list-group-item">Вячеслав Локшин</li>
                        <li className="list-group-item">Алексей Халайджи</li>
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
