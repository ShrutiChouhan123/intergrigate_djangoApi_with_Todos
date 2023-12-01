import React from 'react';
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      useraddress: '',
      todo: []
    }
  }
  handleChange = (event) => {
    this.setState({ userInput: event.target.value })
  }

  handleaddress = (event) => {
    this.setState({ useraddress: event.target.value })
  }
  add = () => {
    let { userInput, useraddress, todo } = this.state
    if (userInput) {
      const newTodo = {
        userInput: userInput,
        useraddress: useraddress
      }
      this.setState({
        todo: [...todo, newTodo]
      })
    }
    // console.log(todo)
    this.setState({ userInput: '' })
    this.setState({ useraddress: '' })


  }
  Delete = (index) => {
    let { todo } = this.state
    todo.splice(index, 1)
    this.setState({ todo })

  }
  handleUpdateTodo = (index) => {
    const { todo } = this.state;
    const update_Todo = todo[index];

    const userINput = prompt("userINput:", update_Todo.userInput);
    const userdesc = prompt("userdesc:", update_Todo.useraddress);

    if (userdesc !== null && userINput !== null) {
      update_Todo.userInput = userINput;
      update_Todo.useraddress = userdesc;
      this.setState({ todo });
    }
  };
  render() {
    let { userInput, useraddress, todo } = this.state
    return (
      <>
        <div class="container">
          <div class="row">
            <div class="col-25">
              <label for="fname">First Name</label>
            </div>
            <div class="col-75">
              <input type="text" id="fname" value={userInput} onChange={this.handleChange} placeholder="Your user name.." />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Email</label>
            </div>
            <div class="col-75">
              <input type="email" id="lname" value={useraddress} onChange={this.handleaddress} placeholder="Your email address.." />
            </div>
          </div>
          <div class="row">
            <button onClick={this.add}>Submit</button>
          </div>
        </div>
<br/><br/>
        <table id="myTable">
          <tr class="header">
            <th style={{ width: "60%" }}>Name</th>
            <th style={{ width: "40%" }}>Country</th>
          </tr>
          {todo.map((i, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{i.userInput}</td>
                  <td>{i.useraddress}</td>
                  <button onClick={() => this.Delete(index)}>Delete</button>
                  <button onClick={() => this.handleUpdateTodo(index)}>update</button>
                </tr>
              </>
            )
          })}

        </table>
      </>
    )
  }
}

export default App;