import React from 'react';

import {connect} from "react-redux";
import * as actions from "../actions"
import Axios from 'axios';


class App extends React.Component {

    componentDidMount() {
        Axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then(resp => {
            var data = resp.data;
            this.props.setEmployeeList(data)
        })
    }

    render() {
        return (
            <>
                {this.props.employees && (
                    this.props.employees.map(emp => <h1>{emp.name}</h1>)
                )}
            </>
        )
    }
}


class MovieApp extends React.Component {

    componentDidMount() {

        this.props.addMovies([{
            movieName: "Sirf Tum",
            movieDuration: "2 Hours"
        }, {
            movieName: "Not Sirf Tum",
            movieDuration: "2 Hours"
        }])
    }

    render() {
        return (
            <>
                {this.props.movies && (
                    this.props.movies.map(movie => <h1>{movie.movieName}</h1>)
                )}  
            </>
        )
    }
}

function mapStateToPropsForMovies(state) {
    return {
        movies: state.movies
    }
}

function mapStateToPropsForEmployees(state) {
    return {
        employees: state.employees
    }
}

export var AppComponent = connect(mapStateToPropsForEmployees, actions)(App);
export var MovieComponent = connect(mapStateToPropsForMovies, actions)(MovieApp);