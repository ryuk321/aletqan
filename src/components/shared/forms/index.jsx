import React from 'react'
import { json } from 'react-router-dom'
import "./style.scss"

// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: '',myValue :''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

  // export default class NameForm extends React.Component{
  //   state ={
  //     character : {}
  //   }
  //   componentDidMount(){
  //     fetch('https://swapi.dev/api/people/1').then(res=>res.json()).then(data=>{
  //       this.setState({character:data})
  //     })
      
  //     console.log('componentDidMount')
  //   }
  //   render( ) {
  //     console.log("render")
  //     return(
  //       <>
  //       <div>Submit</div>
  //       <h1>he;l{this.state.character.name}</h1>

  //       </>
      
  //   )}
  // }


export default class NameForm extends React.Component {
    state = {
        firstName: "", 
        lastName: "", 
        email: "", 
        comments: "", 
        isFriendly: true,
        employment: "",
        favColor: ""
    }
    componentDidMount(){
      console.log("Mount")
      this.setState(JSON.parse(localStorage.getItem("formData")))
      
      
    }
    componentDidUpdate(){
      localStorage.setItem('formData',JSON.stringify(this.state))
    }
    
    handleChange = (event) => {
      console.log(event.target)
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }
    
    /**
     * Goal: 
     * 1. Whenever the state changes, save it in localStorage
     * 2. When the form mounts, pre-populate the state if 
     *    there's saved data in localStorage 
     */
    
    render() {
       console.log("render")
        return (
            <div className = "form--main">
                <form>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={this.handleChange}
                    name="firstName"
                    value={this.state.firstName}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                    name="lastName"
                    value={this.state.lastName}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.email}
                />
                <textarea 
                    value={this.state.comments}
                    placeholder="Comments"
                    onChange={this.handleChange}
                    name="comments"
                />
                <input 
                    type="checkbox" 
                    id="isFriendly" 
                    checked={this.state.isFriendly}
                    onChange={this.handleChange}
                    name="isFriendly"
                />
                <label htmlFor="isFriendly">Are you friendly?</label>
                <br />
                <br />
                
                <fieldset>
                    <legend>Current employment status</legend>
                    <input 
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={this.state.employment === "unemployed"}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={this.state.employment === "part-time"}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={this.state.employment === "full-time"}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />
                </fieldset>
                <br />
                
                <label className="favColor" htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select 
                    id="favColor" 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
            </form>


            </div>
            
        )
    }
}

