import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import { NavLink } from 'react-router-dom';

export default class DetallesPelicula extends Component {
    
    state = {
        pelicula: {}
        , status: false
    }

    mostrarPelicula = () => {
        var request = "/peliculas/" + this.props.id;
        var url = Global.urlpeliculas + request;
        axios.get(url).then(res => {
            this.setState({
                pelicula: res.data
                ,status: true
            });
        });
    }

    componentDidMount = () => {
        this.mostrarPelicula();
    }

    render() {
        return (
            <div>
                <br /><br />
                <h1><u>Detalles de la película número {this.props.id}</u></h1>
                {this.state.status === true &&
                (
                    <React.Fragment>
                        <br />
                        <NavLink to="/" className="btn btn-sm btn-dark">Listado</NavLink>
                        <br /><br />
                        <h3>Nombre: <span style={{color: "green", fontWeight: "bold"}}>{this.state.pelicula.nombre}</span></h3>
                        <h3>Director: <span style={{color: "green", fontWeight: "bold"}}>{this.state.pelicula.director}</span></h3>
                        <h3>Clasificación: <span style={{color: "green", fontWeight: "bold"}}>{this.state.pelicula.clasificacion}</span></h3>
                        <NavLink to={"/update/" + this.state.pelicula.id} className="btn btn-primary">Modificar</NavLink> &nbsp;&nbsp;
                        <NavLink to={"/delete/" + this.state.pelicula.id} className="btn btn-danger">Borrar</NavLink>
                    </React.Fragment>
                )}
            </div>
        )
    }
}
