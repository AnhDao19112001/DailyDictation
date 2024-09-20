const TipsItem = (props) => {

    return (
        <div className="tip">
            <i className="fas fa-lightbulb" />
            <span>
                {props.item.content}
            </span>
            <button className="refresh-button">
                <i className="fas fa-sync-alt" />
            </button>

        </div>
    )
}
export default TipsItem