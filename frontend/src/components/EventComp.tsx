import React from 'react'
import { ILike, ISub } from '../models'

interface EventProps {
    like_event?: ILike
    sub_event?: ISub
}

function EventComp(props: EventProps) {
    let html: JSX.Element
    if (props.sub_event !== undefined) {
        html = (
            <div className="h-10 border border-secondary rounded container my-2">
                <div className="row">
                    <img src="logo-square.png" alt="" className="col-1" />
                    <div className="col-7">
                        <div className="fw-bold">{props?.sub_event?.subscriber}</div>
                        <div className="row">
                            <span className="col-8 d-inline">
                                Подписался на <span className="fw-bold">{props.sub_event?.author}</span>
                                <span className="fw-light mx-3">1 дн.</span>
                            </span>
                        </div>
                    </div>
                    <div className="col-4 position-relative">
                        <button className="position-absolute end-0 top-50 translate-middle-y btn btn-primary my-auto me-2">
                            Посмотреть
                        </button>
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
                        <div className="fw-bold">{props?.like_event?.author}</div>
                        <div className="row">
                            <span className="col-8 d-inline">
                                Поставил "Нравится" на ваш момент <span className="fw-bold">{props?.like_event?.target.author}</span>
                                <span className="fw-light mx-3">1 дн.</span>
                            </span>
                        </div>
                    </div>
                    <div className="col-4 position-relative">
                        <button className="position-absolute end-0 top-50 translate-middle-y btn btn-primary my-auto me-2">
                            Посмотреть
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return html
}

export default EventComp
