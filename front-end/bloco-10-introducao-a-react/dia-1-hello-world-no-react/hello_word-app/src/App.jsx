import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const arr = ['treino', 'exercicios', 'estudar'];
const map = arr.map((i) => Task(i));

class App extends React.Component {
  render() {
    return (map);
  }
}

export default App;
