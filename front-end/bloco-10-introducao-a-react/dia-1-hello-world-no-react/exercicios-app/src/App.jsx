import React from 'react';



class App extends React.Component {
  render() {
    const Task = (value) => {
      return (
        <li>{value}</li>
      );
    }
    const arr = ['treino', 'exercicios', 'estudar'];
    return (
      <div>
        <p>Skills</p>
       <ul>
        {arr.map((i) => Task(i))}
       </ul>
      </div>
    );
  }
}

export default App;
