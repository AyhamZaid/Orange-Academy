import React, { Component } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import "./App.css";
//tsaks
export class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        body: "Task1....................."
      },
      {
        id: 2,
        body: "Task2....................."
      },
      {
        id: 3,
        body: "Task3......................"
      },
      {
        id: 4,
        body: "Task4......................."
      },
      {
        id: 5,
        body: "Task5......................."
      },
      {
        id: 6,
        body: "Task6......................."
      },
      {
        id: 7,
        body: "Task7......................."
      },
      {
        id: 8,
        body: "Task8......................."
      }

    ]
  };

  // Add a new task 
  addTask = (someThingToDo) => {
    const newTask = {
      id: this.state.tasks.length  + 1,
      body: someThingToDo,
      isCompleted: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  // Delete a task  
  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(elem => elem.id !== id)
    })
  }

  render() {
    return (
      <div className="container text-center">
        <p id ="header">To-Do </p>
        <AddTask addTask={this.addTask}/>
        <ul>
          {this.state.tasks.map(task => {
            return <Task key={task.id} task={task} deleteTask={this.deleteTask}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
