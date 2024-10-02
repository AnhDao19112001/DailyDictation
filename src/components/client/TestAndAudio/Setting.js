import Modal from 'react-modal';
Modal.setAppElement('#root');
const listReplayKey = [
    {
        key: "Control",
        value: "Ctrl"
    },
    {
        key: "Shift",
        value: "Shift"
    },
    {
        key: "Alt",
        value: "Alt"
    }
]
const listTimesReplay = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10];
const listTimeBetweenReplay = [0.5, 1, 1.5, 2, 2.5, 3];

const Setting = (props) => {
    const {
        modalIsOpen,
        handleModal,
        keyReplay,
        setKeyReplay,
        setPlaybackCount,
        setCountPlayback,
        playbackCount,
        waveSurferRef,
        setIsPlaying,
        setTimeBetweenReplay,
        timeBetweenReplay
    } = props;
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
    const handleGetKeyReplay = (e) => {
        setKeyReplay(e.target.value);
        // setIsPlaying(false);
        // setCountPlayback(1);
        // waveSurferRef.current.seekTo(0);
        // waveSurferRef.current.pause();
    }
    const handleGetTimesReplay = (e) => {
        const number = parseInt(e.target.value);
        setPlaybackCount(number);
        setIsPlaying(false);
        waveSurferRef.current.pause();

    }
    const handleGetTimeBetweenReplay = (e) => {
        const number = parseFloat(e.target.value);
        setTimeBetweenReplay(number * 1000);
        setCountPlayback(1);
        waveSurferRef.current.seekTo(0);
        waveSurferRef.current.pause();
        setIsPlaying(false);
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
                        <button onClick={handleModal}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Replay Key</b></td>
                                <th>
                                    <select className="form-select custom-select" onChange={handleGetKeyReplay} value={keyReplay} >
                                        {
                                            listReplayKey.map((item, index) => (
                                                <option value={item.key} key={index}>{item.value}</option>
                                            ))
                                        }
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <td><b>Auto Replay</b></td>
                                <th>
                                    <select className="form-select custom-select" value={playbackCount} onChange={handleGetTimesReplay}>
                                        {
                                            listTimesReplay.map((item, index) => (
                                                <option value={item} key={index}>
                                                    {
                                                        item === 0 ? "No" : (item + " times")
                                                    }
                                                </option>
                                            ))
                                        }
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <td><b>Time between replays</b></td>
                                <th>
                                    <select className="form-select custom-select" value={timeBetweenReplay / 1000} onChange={handleGetTimeBetweenReplay}>
                                        {
                                            listTimeBetweenReplay.map((item, index) => (
                                                <option value={item} key={index}>
                                                    {item} seconds
                                                </option>
                                            ))
                                        }
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <td><b>Always show explanation</b></td>
                                <th>
                                    <select className="form-select custom-select" defaultValue={1}>
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