import React from 'react'
import Modal from 'react-modal'
import '../scss/modal.scss'

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

function AddMomentModal(props: ModalProps) {
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
                contentLabel="Create moment"
                closeTimeoutMS={500}
            >
                <>
                    <form>
                        <div className="form-group">
                            <h2>Выберите фотографию</h2>
                            <input type="file" className="form-control" alt="" required />
                            <div className="d-flex justify-content-center">
                                <img src="logo512.png" height="200px" alt="" />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control my-3" placeholder="Выберите теги" required />
                            <input type="text" className="form-control my-3" placeholder="Заголовок" required />
                            <input type="text" className="form-control my-3" placeholder="Описание" />
                        </div>
                        <div className="">
                            <input type="submit" className='btn btn-primary d-block mx-auto my-2' value="Загрузить" />
                            <button className="btn btn-primary d-block mx-auto" onClick={closeModal}>
                                {' '}
                                Закрыть окно{' '}
                            </button>
                        </div>
                    </form>
                </>
            </Modal>
        </>
    )
}

export default AddMomentModal
