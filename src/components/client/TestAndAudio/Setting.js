import { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
const Setting = (prop) => {
    const {
        modalIsOpen,
        setModal,
        wavesurfer,
        isPlaying,
        setIsPlaying,
        maxRepeat,
        setMaxRepeat
    } = prop;
    const [replayKey, setReplayKey] = useState("Control");
    const customStyles = {
        content: {
            top: '40%',
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
    const getTimesReplay = (e) => {
        console.log(e.target.value)
        setMaxRepeat(e.target.value)
    }

    useEffect(() => {
        const handleReplayKey = (e) => {
            if (replayKey === e.key) {
                setIsPlaying(true);
                wavesurfer.current.seekTo(0);
                wavesurfer.current.play();
            }
            else if (replayKey === e.key) {
                setIsPlaying(true);
                wavesurfer.current.seekTo(0);
                wavesurfer.current.play();
            }
            else if (replayKey === e.key) {
                setIsPlaying(true);
                wavesurfer.current.seekTo(0);
                wavesurfer.current.play();
            }
        }
        window.addEventListener('keydown', handleReplayKey);
        return () => {
            // Cleanup: xóa event listener khi component unmount
            window.removeEventListener('keydown', handleReplayKey);
        };
    }, [isPlaying, replayKey])

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
                                    <select className="form-select custom-select" onChange={getReplayKey} value={"Control"}>
                                        <option value={"Control"}>Ctrl</option>
                                        <option value={"Shift"}>Shift</option>
                                        <option value={"Alt"}>Alt</option>
                                        <option value={"Ctrl Shift"}>Ctrl + Shift</option>
                                        <option value={"Ctrl Alt"}>Ctrl + Alt</option>
                                        <option value={"Ctrl Space"}>Ctrl + Space</option>
                                        <option value={"Ctrl b"}>Ctrl + B</option>
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <td><b>Auto Replay</b></td>
                                <th>
                                    <select className="form-select custom-select" onChange={getTimesReplay} value={0}>
                                        <option value={0}>No</option>
                                        <option value={1}>1 times</option>
                                        <option value={2}>2 times</option>
                                        <option value={3} selected={true}>3 times</option>
                                        <option value={4}>4 times</option>
                                        <option value={5}>5 times</option>
                                        <option value={6}>6 times</option>
                                        <option value={7}>7 times</option>
                                        <option value={8}>8 times</option>
                                        <option value={9}>9 times</option>
                                        <option value={10}>10 times</option>
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <td><b>Time between replays</b></td>
                                <th>
                                    <select className="form-select custom-select" value={1}>
                                        <option value={0.5}>0.5 seconds</option>
                                        <option value={1}>1 seconds</option>
                                        <option value={1.5}>1.5 seconds</option>
                                        <option value={2}>2 seconds</option>
                                        <option value={2.5}>2.5 seconds</option>
                                        <option value={3}>3 seconds</option>
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <td><b>Always show explanation</b></td>
                                <th>
                                    <select className="form-select custom-select" value={1}>
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