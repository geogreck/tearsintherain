import React, {useState} from 'react'
import { IMoment, IUser } from '../models'
import PostsGrid from './PostsGrid'
import SettingsModal from './SettingsModal'

interface ProfileProps {
    user: IUser
    moments: IMoment[]
}

function Profile(props: ProfileProps) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    function openSettingsModal() {
        setIsSettingsOpen(true)
    }

    return (
        <div>
            <div className="w-50 h-70 border border-primary container my-3 shadow p-3 bg-body rounded">
                <div className="row">
                    <img src={props?.user.profile_pic} alt="" className="col-2" />
                    <div className="col-9">
                        <div className="row fw-bold">{props?.user.nickname}</div>
                        <div className="row">
                            <button className="btn btn-secondary" onClick={openSettingsModal}> Открыть настройки</button>
                        </div>
                    </div>
                </div>
                <div className="row d-inline">
                    <span className="fw-bold">Рейтинг:</span>
                    {props?.user.rating}
                    <span className="fw-bold">Дата регистрации</span> {props?.user.reg_day.toDateString()}
                </div>
            </div>
            {/*  <div className=" border border-primary container my-1 shadow p-1 bg-body rounded"> */}
            <PostsGrid />

            <SettingsModal modalState={{ isOpen: isSettingsOpen, setIsOpen: setIsSettingsOpen }} />
        </div>
    )
}

export default Profile
