import Modal from 'react-modal';
import { useState } from 'react';
Modal.setAppElement('#root');
const Setting = (prop) => {
    const { modalIsOpen, setModal } = prop;
    const customStyles = {
        content: {
            top: '35%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: "15px"
        },
    };
    const closeModal = () => {
        setModal(false);
    }
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="modal-setting">
                    <div className='modal-title'>
                        <h4>
                            <i className="fa-solid fa-gear"></i>
                            Setting
                        </h4>
                        <button onClick={closeModal}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Replay Key</b></td>
                                <th>
                                    <select className="form-select custom-select">
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <td><b>Auto Replay</b></td>
                                <th>
                                    <select className="form-select custom-select">
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <td><b>Time between replays</b></td>
                                <th>
                                    <select className="form-select custom-select">
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <td><b>Always show explanation</b></td>
                                <th>
                                    <select className="form-select custom-select">
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Modal>
        </>
    )
}

export default Setting;