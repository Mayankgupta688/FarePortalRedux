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

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps, actions)(App)