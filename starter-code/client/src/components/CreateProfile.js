import React, { Component } from 'react';
import axios from "axios";

export default class CreateProfile extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
            firstname: '',
            lastname: '',
            username: '',
            location: '',
            degree: '',
            skills: '',
            financing: '',
            timing: '',
            summary: '',
            picture: '',
            portfolio: {
                education: '',
                experience: '',
                accomplishments: '',
                samples: '',
                references: ''
            }
        }

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit(e) {
    e.preventDefault(); // prevent the default behaviour of the form, being redirecting to another route
    axios({
        url: "https://localhost:3001/profile/create",
        data: this.state,
        method: "POST"
    })
    .then((response)=> {
        this.props.history.push(`/profile/${response.data._id}`)
    })
    .catch((error)=> {
        (err)
    })
    
}

render(){
    return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.firstname} placeholder="firstname" type="text" name="firstname"/>
        <input onChange={this.handleChange} value={this.state.lastname} placeholder="lastname" type="text" name="lastname"/>
        <input onChange={this.handleChange} value={this.state.username} placeholder="username" type="text" name="username"/>
        <input onChange={this.handleChange} value={this.state.location} placeholder="location"  type="text" name="location"/>
        <input onChange={this.handleChange} value={this.state.degree} placeholder="degree" type="text" name="degree"/>
        <input onChange={this.handleChange} value={this.state.skills} placeholder="skills" type="text" name="skills"/>
        <input onChange={this.handleChange} value={this.state.financing} placeholder="financing" type="text" name="financing"/>
        <input onChange={this.handleChange} value={this.state.timing}  placeholder="timing" type="text" name="timing"/>
        <input onChange={this.handleChange} value={this.state.summary}  placeholder="summary" type="text" name="summary"/>
        <input onChange={this.handleChange} value={this.state.picture}  placeholder="picture" type="text" name="picture"/>
        <input onChange={this.handleChange} value={this.state.portfolio}  placeholder="portfolio" type="text" name="portfolio"/>
        <button onChange={this.handleChange} type="submit">Submit </button>
      </form>
    </div>
    )  
}
}