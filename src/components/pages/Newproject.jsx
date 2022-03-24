import Form from "../Form";
import '../../css/form.css'
import { Component, useState } from "react/cjs/react.production.min";
import axios, { Axios } from "axios";
import Post from "../Post";

function Newproject () {

        return (
                <div className="container">
                    <h1>Newproject</h1>
                    <p className="d-flex justify-content-around">Crie seu projeto aqui</p>
                    <Form />

                    <Post />
                </div>
            );

}

export default Newproject;

{/**
    class Newproject extends Component {


    async componentDidMount(project){
        project.cost = 0
        project.services = []

        axios.post('http://localhost:5000/projects')
            body: JSON.stringify(project)
            .then((response) => {
                this.setState({ project: response.data })
                console.log(response)
            })
            .catch(function (error) {
                // manipula erros da requisição
                console.error(error);
              })
            .then((data) => {
                console.log(data)
            })
    }

    render (){

        return (
                <div className="container">
                    <h1>Newproject</h1>
                    <p className="d-flex justify-content-around">Crie seu projeto aqui</p>
                    <Form handleSumbit={Newproject} />
                </div>
            );
    }
}

export default Newproject;

export default Newproject;
*/}