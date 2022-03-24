const Diplay = ({ number, prevNumber, operator}) => {
return (
        <div className="Display">
            <p className="prevNumber">{prevNumber} {operator}</p>
            <p>{number}</p>
        </div>
    )
}

export default Diplay