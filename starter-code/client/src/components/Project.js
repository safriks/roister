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
                        <h3>{this.state.profile.name}</h3>
                        <h3>{this.state.profile.location}</h3>
                        <h3>{this.state.profile.tagline}</h3>
                        <h3>{this.state.profile.description}</h3>
                        <h3>{this.state.profile.tags}</h3>
                        <p>{this.state.profile.financing}</p>
                        <h3>{this.state.profile.timing}</h3>
                        <h3>{this.state.profile.team}</h3>
                        <p>{this.state.profile.picture}</p>
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