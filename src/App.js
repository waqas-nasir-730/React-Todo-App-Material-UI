import React, { Component } from "react";
import "./styles.css";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Form from "./components/Form";
import Todos from "./components/Todos";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: "",
      todos: []
    };
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: e.target.value === "" ? true : false
    });
  };

  addToDoHandler = (e) => {
    e.preventDefault();

    if (this.state.inputText !== "") {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            text: this.state.inputText,
            id: Math.random() * 100,
            is_completed: false
          }
        ],
        inputText: ""
      });
    } else {
      this.setState({
        error: true
      });
    }
  };

  toDoDeleteHandler = (todo) => {
    const { todos = [] } = this.state;

    this.setState({
      todos: todos.filter((element) => element.id !== todo.id)
    });
  };

  toDoCompleteHandler = (todo) => {
    const { todos = [] } = this.state;

    this.setState({
      todos: todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            is_completed: !item.is_completed
          };
        }
        return item;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              React To-Do App
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={styles.form} className="contatiner">
          <Form
            state={this.state}
            addToDoHandler={this.addToDoHandler}
            inputHandler={this.inputHandler}
          />
          <br />
          <div>
            <Todos
              toDoDeleteHandler={this.toDoDeleteHandler}
              toDoCompleteHandler={this.toDoCompleteHandler}
              todos={this.state.todos}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  form: {
    marginTop: 40
  }
};

export default App;
