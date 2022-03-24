import '../css/form.css'
import Btn from './Btn';
import Input from './Nput';
import Select from './Selector';

import axios from "axios";
import { Component, useEffect, useState } from "react/cjs/react.production.min";
import api from "./Api";

const Form = () => {

    const url = ('http://localhost:5000/categories')

    function getUser() {
        axios.get(url)
        .then(response => {
            const data = response.data

            console.log(data)
        })
        .catch(error => console.log(error))
    }

    getUser()

    return  (

        <form className='d-flex flex-column'>
            <Input type={'text'} text={'Nome do Projeto'} name={'project'} placeholder={'Digite aqui o nome do projeto'} />
            <Input type={'number'} text={'Valor do Projeto'} name={'valor'} placeholder={'Digite aqui o valor do projeto'} />

            <div className='d-flex flex-column'>
            <h5 htmlFor={'tip'}>Selecione o tipo:</h5>
            <select className={"input"} id={'tipo'} name={'tipo'}>
                <option>Selecione o tipo</option>

            </select>
            </div>

            <Btn type={"submit"} value={'Criar'}/>
        </form>
        )
}

export default Form;


{/**
{options.map((option) => (
    <option key={option.id} value={option.id}>
        {option.name}
    </option>
))}
    *
    */}

{/**

class Form extends Component {

    state= {
        tip:[]
    }

    async componentDidMount(){
        axios.get('http://localhost:5000/categories')
            .then((response) => {
                this.setState({ tip: response.data })
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.error(error);
            })
    }

    render (){
        const { tip } = this.state

        console.log(tip)

        return  (

            <form className='d-flex flex-column'>
                <Input type={'text'} text={'Nome do Projeto'} name={'project'} placeholder={'Digite aqui o nome do projeto'} />
                <Input type={'number'} text={'Valor do Projeto'} name={'valor'} placeholder={'Digite aqui o valor do projeto'} />

                <Select name={'tipo'} id={'tipo'} text={'Selecione o tipo'} options={tip} />

                <Btn type={"submit"} value={'Criar'}/>
            </form>
         )

    }

}

export default Form;
*/}