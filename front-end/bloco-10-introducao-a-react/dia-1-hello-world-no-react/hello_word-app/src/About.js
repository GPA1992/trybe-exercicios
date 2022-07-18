import React from 'react';

class About extends React.Component {
  render() {
    const skills = ['HTML', 'CSS', 'javaScript'] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
    return (
      <div>
        <h1>
          {'Gabriel'}
        </h1>
        <p>
          {'Tenho 29 anos, estou em transição de carreira e sou estudante da Trybe'}
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>{ jsxSkills }</ul>
      </div>
    );
  }
}

export default About;