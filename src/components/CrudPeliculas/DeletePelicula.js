import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import { Redirect, NavLink } from 'react-router-dom';

export default class DeletePelicula extends Component {

    state = { status: false };

    eliminarPelicula = () => {
        var request = "/peliculas/" + this.props.id;
        var url = Global.urlpeliculas + request;
        axios.delete(url).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/" />
        }
        return (
            <div>
                <br />
                <h1 style={{color: "red"}}>¿Desea eliminar la película {this.props.id}?</h1><br />
                <NavLink to="/" className="btn btn-light">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.eliminarPelicula} className="btn btn-danger">Eliminar</button>
            </div>
        )
    }
}
