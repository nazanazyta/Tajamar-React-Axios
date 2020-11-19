import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuPeliculas from './CrudPeliculas/MenuPeliculas';
import Peliculas from './CrudPeliculas/Peliculas';
import InsertarPelicula from './CrudPeliculas/InsertarPelicula';
import DetallesPelicula from './CrudPeliculas/DetallesPelicula';
import UpdatePelicula from './CrudPeliculas/UpdatePelicula';
import DeletePelicula from './CrudPeliculas/DeletePelicula';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MenuPeliculas />
                    <Switch>
                        <Route exact path="/" component={Peliculas} />
                        <Route exact path="/create" component={InsertarPelicula} />
                        <Route exact path="/detalles/:id" render={props => {
                            var id = props.match.params.id;
                            return <DetallesPelicula id={id} />
                        }} />
                        <Route exact path="/update/:id" render={props => {
                            var id = props.match.params.id;
                            return <UpdatePelicula id={id} />
                        }} />
                        <Route exact path="/delete/:id" render={props => {
                            var id = props.match.params.id;
                            return <DeletePelicula id={id} />
                        }}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}