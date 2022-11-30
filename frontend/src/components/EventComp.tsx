import React from 'react'
import { Link } from 'react-router-dom'
import { IMomentLike, ICommentLike, ISub } from '../models'

interface EventProps {
    event: IMomentLike | ICommentLike | ISub
    type: 'sub' | 'momentLike' | 'commentLike'
}

function EventComp(props: EventProps) {
    let html: JSX.Element
    if (props.type === 'sub') {
        html = (
            <div className="h-10 border border-secondary rounded container my-2">
                <div className="row">
                    <img src="logo-square.png" alt="" className="col-1" />
                    <div className="col-7">
                        <div className="fw-bold">{props?.event.author_name}</div>
                        <div className="row">
                            <span className="col-8 d-inline">
                                Подписался на <span className="fw-bold">{props.event.target_name}(вас)</span>
                                <span className="fw-light mx-3">1 дн.</span>
                            </span>
                        </div>
                    </div>
                    <div className="col-4 position-relative">
                        <Link to={`/profile/${props.event.author}`}className="position-absolute end-0 top-50 translate-middle-y btn btn-primary my-auto me-2">
                            Посмотреть
                        </Link>
                    </div>
                </div>
            </div>
        )
    } else {
        html = (
            <div className="h-10 border border-secondary rounded container my-2">
                <div className="row">
                    <img src="logo-square.png" alt="" className="col-1" />
                    <div className="col-7">
                        <div className="fw-bold">{props?.event.author_name}</div>
                        <div className="row">
                            <span className="col-8 d-inline">
                                Поставил "Нравится" на ваш {props.type === 'momentLike'? 'момент': 'комментарий'} <span className="fw-bold">{props?.event.target_name}</span>
                                <span className="fw-light mx-3">1 дн.</span>
                            </span>
                        </div>
                    </div>
                    <div className="col-4 position-relative">
                        <Link to={`/moments/${props.event.target}`} className="position-absolute end-0 top-50 translate-middle-y btn btn-primary my-auto me-2">
                            Посмотреть
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return html
}

export default EventComp
