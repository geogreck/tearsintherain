import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AddMomentModal from '../components/AddMomentModal'
import Header from '../components/Header'

export default function Root() {
    const [curPage, setPage] = useState(
        window.location.hash.length > 0 ? window.location.hash.substr(1).replace('#', '') : 'index',
    )

    const [isLogged, setLogged] = useState(false)
    function login() {
        setLogged(true)
        setPage('profile')
    }
    const [isAddOpen, setIsAddOpen] = useState(false)
    function openAddModal() {
        setIsAddOpen(true)
    }
    return (
        <>
            <div className="h-100 items-center">
                <Header page={curPage} openModal={openAddModal} isLogged={isLogged} />
                <Outlet />
                <AddMomentModal modalState={{ isOpen: isAddOpen, setIsOpen: setIsAddOpen }} />
            </div>
        </>
    )
}
