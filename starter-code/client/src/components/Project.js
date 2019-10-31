import React, { Component } from 'react'
import instance from "../auth/customAxios";

export default class Project extends Component {
    constructor(props){
        super(props);
    }

    state = {
        user:"",
        errorMessage: "",
        projects: []
    }

    componentDidMount(){
        instance({
            url: `${process.env.REACT_APP_Server_API}/project`,
            method: "GET"
        })
        .then((response)=> {
            this.setState({user: response.data.user, projects: response.data.projects})
        })
        .catch((error)=> {
            console.log(error)
        })
    }  

    render() {
        return (
            <div>
                {this.state.projects ? 
                    this.state.projects.map(project =>{
                        return (
                            <>
                            <h3>{project.name}</h3>
                            <h3>{project.location}</h3>
                            <h3>{project.tagline}</h3>
                            <h3>{project.description}</h3>
                            <h3>{project.tags}</h3>
                            <p>{project.financing}</p>
                            <h3>{project.timing}</h3>
                            <h3>{project.team}</h3>
                            <img src={project.picture}/>
                        </>
                        )
                    })
                  : <p> No projects to show</p>  
                }
            </div>
        )
    }
}