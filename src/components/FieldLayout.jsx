
export const FieldLayout = ({ fields, handleClick,  }) => {
    return (
        <div className="fieldLayout">
            {
                fields.map((field, index) => (
                    <button onClick={() => handleClick(index)} className="fieldLayout-field" key={index}>{ field }</button>
                ))
            }
        </div>
    )
}