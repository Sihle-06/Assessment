import React, {Component} from 'react';
import axios from 'axios'

export default class CreateExercise extends Component {

constructor(props){
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContact =this.onChangeContact.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        username:'',
        email: '',
        contact: '',
        users: []    }
}

componentDidMount() {
    axios.get('http://localhost:5000/users/')
     .then(response => {
         if(response.data.length > 0) {
             this.setState({
                users:response.data.map(user => user.username),
                username: response.data[0].username
             })             
         }
     })
}


onChangeUsername(e){
    this.setState({
        username: e.target.value
    })
}

onChangeEmail(e){
    this.setState({
        email: e.target.value
    })
}

onChangeContact(e){
    this.setState({
        contact: e.target.value
    })
}

onSubmit(e){
    e.preventDefault();

    const exercise = {
        username : this.state.username,
        email : this.state.email,
        contact : this.state.contact
    }

      console.log(exercise)
   

      axios.post('http://localhost:5000/exercises/add', exercise)
       .then(res => console.log(res.data))

        window.location = '/'


}

    render(){
        return(
            <div>
                <h3>Create new exercise</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                       <label>Username</label>
                       <select ref="userInput"
                       required
                       className="form-control"
                       value={this.state.username}
                       onChange={this.onChangeUsername}>
                       {
                           this.state.users.map(function (user) {
                               return <option
                                 key={user}
                                 value={user}>{user}</option>
                           })
                       }
                       </select>
                   </div>

                   <div className="form-group">
                       <label>Email</label>
                       <input type="text"
                       required
                       className="form-control"
                       value={this.state.email}
                       onChange={this.onChangeEmail}
                       />
                   </div>
                   
                   <div className="form-group">
                       <label>Contact</label>
                       <input type="text"
                       required
                       className="form-control"
                       value={this.state.contact}
                       onChange={this.onChangeContact}
                       />
                   </div>

                   <div className="form-group">
                       <input type="Submit" value="Create New Employee" className="btn btn-primary" />
                   </div>
                

                </form>
                

            </div>
            
        )
    }

    
}
