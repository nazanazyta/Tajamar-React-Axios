import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { Redirect } from 'react-router-dom';

export default class InsertarPelicula extends Component {

    cajaNumRef = React.createRef();
    cajaNomRef = React.createRef();
    cajaDirRef = React.createRef();
    cajaClaRef = React.createRef();

    state = { status: false }

    nuevaPelicula = (e) => {
        e.preventDefault();
        var nom = this.cajaNomRef.current.value;
        var dir = this.cajaDirRef.current.value;
        var cla = this.cajaClaRef.current.value;
        var pelicula = {
            nombre: nom
            , director: dir
            , clasificacion: cla
        };
        var url = Global.urlpeliculas + '/peliculas';
        axios.post(url, pelicula).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>Nueva película</h1>
                <form onSubmit={this.nuevaPelicula} style={{width: "50%", margin: "auto"}}>
                    <label>Nombre: </label>
                    <input type="text" name="cajanom" className="form-control" ref={this.cajaNomRef} />
                    <label>Director: </label>
                    <input type="text" name="cajadir" className="form-control" ref={this.cajaDirRef} />
                    <label>Clasificación: </label>
                    <input type="text" name="cajatel" className="form-control" ref={this.cajaClaRef} /><br />
                    <button className="btn btn-success">Añadir</button>
                </form>
            </div>
        )
    }
}
