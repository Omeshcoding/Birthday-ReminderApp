import React from 'react';

const List = ({profile}) => {
  return (
    <> 
    {
      profile.map((person) => {
        const { id, name, age, image }=person
        return (
          <article key={id} className="person">
            <div>
              <img src={image} />
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );})}
  </>

  );
};

export default List;
