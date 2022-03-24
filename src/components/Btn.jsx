import '../css/btn.css'

const Btn = ({value, type}) => {
    return (
            <input id='btn' className='btnSubmit btn col-2 d-flex justify-content-around ' type={type} value={value} />

     );
}

export default Btn;