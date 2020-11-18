import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import { NavLink } from 'react-router-dom';

export default class Peliculas extends Component {

    state = {
        peliculas: []
        , status: false
    }

    cargarPeliculas = () => {
        var url = Global.urlpeliculas;
        var request = "/peliculas";
        axios.get(url + request).then(res => {
            this.setState({
                peliculas: res.data
                , status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarPeliculas();
    }

    render() {
        return (
            <div>
                <h1>Peliculas</h1>
                <table className="table table-info">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id Película</th>
                            <th>Nombre</th>
                            <th>Director</th>
                            <th>Clasificación</th>
                            <th>Detalles</th>
                            <th>Modificar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.status === true &&
                        (
                            this.state.peliculas.map((peli, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{peli.id}</td>
                                        <td style={{fontWeight: "bold"}}>{peli.nombre}</td>
                                        <td>{peli.director}</td>
                                        <td>{peli.clasificacion}</td>
                                        <td>
                                            <NavLink to={"/detalles/" + peli.id}>Detalles</NavLink>
                                        </td>
                                        <td>
                                            <NavLink to={"/update/" + peli.id}>Modificar</NavLink>
                                        </td>
                                        <td>
                                            <NavLink to={"/delete/" + peli.id}>Eliminar</NavLink>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}