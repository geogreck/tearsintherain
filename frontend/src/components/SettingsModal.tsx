import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

interface ModalProps {
    modalState: {
        isOpen: boolean
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    }
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

function SettingsModal(props: ModalProps) {
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        props.modalState.setIsOpen(false)
    }

    return (
        <>
            <Modal
                isOpen={props.modalState.isOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Settings"
                closeTimeoutMS={500}
            >
                <form>
                    <h2>Изменить данные о себе</h2>
                    <div className="form-group">
                        <input type="email" className="form-control my-3" placeholder="email" />
                        <input type="password" className="form-control my-3" placeholder="Пароль" />
                        <input type="file" className="form-control my-3" placeholder="Изображение пользователя" />
                    </div>
                    <div className="d-flex justify-content-center">
                            {/* <input type="submit" className='btn btn-primary' value="Загрузить" /> */}
                            <button className="btn btn-primary" onClick={closeModal}>
                                {' '}
                                Закрыть окно{' '}
                            </button>
                        </div>
                </form>
            </Modal>
        </>
    )
}

export default SettingsModal
