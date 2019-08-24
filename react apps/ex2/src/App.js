import React, { Component } from "react";
import Header from "./components/layout/Header";
import Aside from "./components/Aside";
import Details from "./components/Details";

export class App extends Component {
  state = {
    selectedItemId: 1,
    data: [
      {
        id: 1,
        name: 'Ayham',
        email: 'ayham.zaid@gmail.com',
        phone: '0785778213',
        city: 'Amman',
        state: 'Amman',
        country: 'Jordan',
        orgainsation: 'Orange',
        jobProfile: 'Software Enginner',
        additionalInfo: 'love vedio Games'
      },
      {
        id: 2,
        name: 'Mohammed',
        email: 'Mohammed@gmail.com',
        phone: '0777519973',
        city: 'Amman',
        state: 'Amman',
        country: 'Jordan',
        orgainsation: 'Orange',
        jobProfile: 'Programer',
        additionalInfo: 'Loves help people '
      },
      {
        id: 3,
        name: 'Yasser',
        email: 'yasser@gmail.com',
        phone: '077328423',
        city: 'Amman',
        state: 'Amman',
        country: 'Jordan',
        orgainsation: 'O',
        jobProfile: 'Software Developer',
        additionalInfo: 'Buys Lots of Products in general'
      },
    ]
  }

  handleClick = (id) => {
    this.setState({selectedItemId: id});
  }


  render() {
    return (
     
        <div className="container-fluid d-flex flex-column grow">
          <div className="row">
            <header className="col-12 px-0">
              <Header />
            </header>
            <aside className="col-4">
              {this.state.data.map(element => {
                return (<Aside key={element.id} info={element} selectItem={this.handleClick}/>)
              })}
              
            </aside>
            <div className="col-8 main">
              <Details info={this.state.data.filter(element => {
                return element.id === this.state.selectedItemId;
              })[0]}/>
            </div>
          </div>
          <footer />
        </div>
    
    );
  }
}

export default App;
