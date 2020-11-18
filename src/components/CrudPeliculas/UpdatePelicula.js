import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import { Redirect, NavLink } from 'react-router-dom';

export default class UpdateHospital extends Component {

    cajaNumRef = React.createRef();
    cajaNomRef = React.createRef();
    cajaDirRef = React.createRef();
    cajaClaRef = React.createRef();

    state = { status: false }

    modificarPelicula = (e) => {
        e.preventDefault();
        var num = parseInt(this.cajaNumRef.current.value);
        var nom = this.cajaNomRef.current.value;
        var dir = this.cajaDirRef.current.value;
        var cla = this.cajaClaRef.current.value;
        var pelicula = {
            id: num
            , nombre: nom
            , director: dir
            , clasificacion: cla
        };
        var request = "/peliculas/" + num;
        var url = Global.urlpeliculas + request;
        axios.put(url, pelicula).then(res => {
            this.setState({status: true});
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>Modificar película {this.props.id}</h1>
                <NavLink to={'/detalles/' + this.props.id} className="btn btn-sm  btn-dark">Detalles</NavLink>&nbsp;
                <NavLink to={'/'} className="btn btn-sm  btn-dark">Lista</NavLink>
                <form onSubmit={this.modificarPelicula} style={{width: "50%", margin: "auto"}}>
                <label>Número: </label>
                    <input type="number" name="cajanum" className="form-control" ref={this.cajaNumRef}
                        value={this.props.id} readOnly />
                    <label>Nombre: </label>
                    <input type="text" name="cajanom" className="form-control" ref={this.cajaNomRef} />
                    <label>Director: </label>
                    <input type="text" name="cajadir" className="form-control" ref={this.cajaDirRef} />
                    <label>Clasificación: </label>
                    <input type="text" name="cajatel" className="form-control" ref={this.cajaClaRef} /><br />
                    <button className="btn btn-success">Modificar</button>
                </form>
            </div>
        )
    }
}
