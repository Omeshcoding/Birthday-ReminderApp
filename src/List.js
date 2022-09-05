import React from 'react';

const List = (props) => {
  return (
    <section className='person'>
      <img src={props.image} />
      <div>
      <h4>{ props.name}</h4>
      <p>{ props.age} years</p>
      </div>
    </section>
  );
};

export default List;
