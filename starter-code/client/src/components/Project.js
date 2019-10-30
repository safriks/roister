import React, { Component } from 'react'
import axios from "axios";

export default class Project extends Component {

    state = {
        loading: true,
        error: false,
        profile: {}
    }

    componentDidMount(){
        let projectId = this.props.match.params.projectId

        axios({
            url: `${process.env.REACT_APP_API}}/${projectId}`,
            method: "GET"
        })
        .then((response)=> {
            var stateStringify = JSON.stringify(this.state); 
            var stateCopy = JSON.parse(stateStringify);

            stateCopy.beer = response.data;
            stateCopy.loading = false;
            this.setState(stateCopy);
        })
        .catch((error)=> {
            var stateStringify = JSON.stringify(this.state);
            var stateCopy = JSON.parse(stateStringify);

            stateCopy.error = error.message;
            this.setState(stateCopy);
        })
    }  

    render() {
        return (
            <div>
                {this.state.loading ? 
                    <img src="/loading.gif" alt=""/>:
                    <>
                        <h3>{this.state.project.name}</h3>
                        <h3>{this.state.project.location}</h3>
                        <h3>{this.state.project.tagline}</h3>
                        <h3>{this.state.project.description}</h3>
                        <h3>{this.state.project.tags}</h3>
                        <p>{this.state.project.financing}</p>
                        <h3>{this.state.project.timing}</h3>
                        <h3>{this.state.project.team}</h3>
                        <p>{this.state.project.picture}</p>
                    </>
                }
                {this.state.error ? 
                    this.state.error:
                    "Error"
                }
            </div>
        )
    }
}