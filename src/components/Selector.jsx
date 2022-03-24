const Selector = ({ id, name, text, options, handleOnChange, value }) => {
    return (
        <div className='d-flex flex-column'>
            <h5 htmlFor={name}>{text}:</h5>
            <select className={"input"} id={id} name={name}>
                <option>Selecione o tipo</option>
                
            </select>
        </div>
     );
}

export default Selector;

{/**
{options.map((option) => (
    <option key={option.id} value={option.id}>
        {option.name}
    </option>
))}
    *
    */}