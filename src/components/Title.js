import React from 'react';

const Title = (props) =>
  <div>
    <h1>{props.title}</h1>
    <h2>Ilosc zadan: {props.tasksNumber}</h2>
  </div>

export default Title;
