import { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
const Setting = (prop) => {
    const { modalIsOpen, setModal, wavesurfer, isPlaying, setIsPlaying } = prop;
    const [replayKey, setReplayKey] = useState("Control");
    const customStyles = {
        content: {
            top: '35%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: "15px",
            backgrounf: "#fff"
        },
    };
    const closeModal = () => {
        setModal(false);
    }
    const getReplayKey = (e) => {
        setReplayKey(e.target.value);
    }
    useEffect(() => {
        const handleReplayKey = () => {
            if (replayKey === "Control") {
                wavesurfer.current.playPause();
                setIsPlaying(!isPlaying);
            }
        }
        window.addEventListener('keydown', handleReplayKey);

        // return () => {
        //     window.removeEventListener('keydown', handleReplayKey);
        // };
    }, [])

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
                                    <select className="form-select custom-select" onChange={getReplayKey}>
                                        <option value={"Control"}>Ctrl</option>
                                        <option value={2}>Shift</option>
                                        <option value={2}>Alt</option>
                                        <option value={2}>Ctrl + Shift</option>
                                        <option value={2}>Ctrl + Alt</option>
                                        <option value={2}>Ctrl + Space</option>
                                        <option value={2}>Ctrl + b</option>
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <td><b>Auto Replay</b></td>
                                <th>
                                    <select className="form-select custom-select">
                                        <option value={1}>No</option>
                                        <option value={1}>1 times</option>
                                        <option value={1}>2 times</option>
                                        <option value={1} selected={true}>3 times</option>
                                        <option value={1}>4 times</option>
                                        <option value={1}>5 times</option>
                                        <option value={1}>6 times</option>
                                        <option value={1}>7 times</option>
                                        <option value={1}>8 times</option>
                                        <option value={1}>9 times</option>
                                        <option value={1}>10 times</option>
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <td><b>Time between replays</b></td>
                                <th>
                                    <select className="form-select custom-select">
                                        <option value={1}>0.5 seconds</option>
                                        <option value={1}>1 seconds</option>
                                        <option value={1}>1.5 seconds</option>
                                        <option value={1}>2 seconds</option>
                                        <option value={1}>2.5 seconds</option>
                                        <option value={1}>3 seconds</option>
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <td><b>Always show explanation</b></td>
                                <th>
                                    <select className="form-select custom-select">
                                        <option value={1}>Yes</option>
                                        <option value={2}>No</option>
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