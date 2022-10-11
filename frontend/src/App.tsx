import React, { useState } from 'react'
import EventComp from './components/EventComp'
import Header from './components/Header'
import AddMomentModal from './components/AddMomentModal'
import Post from './components/Post'
import Profile from './components/Profile'
import { users, moments, subbs } from './data/local'
import SettingsModal from './components/SettingsModal'

function App() {
    const [curPage, setPage] = useState(
        window.location.hash.length > 0 ? window.location.hash.substr(1).replace('#', '') : 'index',
    )
    window.addEventListener('hashchange', function (e) {
        if (window.location.hash.length > 0) {
            let name = window.location.hash.substr(1).replace('#', '')
            setPage(name)
        }
    })

    const [isAddOpen, setIsAddOpen] = useState(false)
    function openAddModal() {
        setIsAddOpen(true)
    }

    return (
        <div className="h-100 items-center">
            <Header page={curPage} openModal={openAddModal} />
            {curPage === 'index' ? <><Post user={users[0]} moment={moments[0]} /><Post user={users[0]} moment={moments[0]} /> </>: ''}
            {curPage === 'profile' ? <Profile user={users[0]} moments={moments} /> : ''}
            {curPage === 'notifications' ? <EventComp sub_event={subbs[0]} like_event={undefined} /> : ''}

            <AddMomentModal modalState={{ isOpen: isAddOpen, setIsOpen: setIsAddOpen }} />
        </div>
    )
}

export default App
