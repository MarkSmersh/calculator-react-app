const Diplay = ({ number, prevNumber}) => {
return (
        <div className="Display">
            <p className="prevNumber">{prevNumber}</p>
            <p>{number}</p>
        </div>
    )
}

export default Diplay