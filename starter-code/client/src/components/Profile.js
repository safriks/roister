import React, { Component } from 'react'
import axios from "axios";

export default class Profile extends Component {

    state = {
        loading: true,
        error: false,
        profile: {}
    }

    componentDidMount(){
        let profileId = this.props.match.params.profileId

        axios({
            url: `${process.env.REACT_APP_API}}/${profileId}`,
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
                        <h3>{this.state.profile.firstname}</h3>
                        <h3>{this.state.profile.lastname}</h3>
                        <h3>{this.state.profile.username}</h3>
                        <h3>{this.state.profile.location}</h3>
                        <h3>{this.state.profile.degree}</h3>
                        <p>{this.state.profile.skills}</p>
                        <h3>{this.state.profile.financing}</h3>
                        <h3>{this.state.profile.timing}</h3>
                        <p>{this.state.profile.summary}</p>
                        {/* picture */}
                        <p>{this.state.profile.portfolio}</p>
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