const Button = ({ type, value, onClick }) => {
    return (
        <div className={"Button " + type} onClick={() => onClick(type, value)}>
            <p>{value}</p>
        </div>
    )
}

export default Button

