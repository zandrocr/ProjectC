const Nput = ({ type, text, name, placeholder, value, handleOnChange}) => {
    return (
        <div className='d-flex flex-column'>
            <h5 htmlFor={name}>{text}:</h5>
            <input className={"input"} autocomplete="off" type={type} text={text} name={'name'} placeholder={placeholder} />
        </div>
     );
}

export default Nput;