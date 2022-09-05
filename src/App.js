import React, { Profiler, useState } from 'react';
import data from './data';
import List from './List';
function App() {
const [profile,setProfile]= useState(data)
  const profileLength = profile.length;

  return(
    <main>
      <section className="container">
        <h3>{profileLength} birthday today</h3>
        {profile.map(({id, name , age,image}) => {
          return <List 
            key={id}
            name={name}
            age={age}
            image={image}
        />
        })}
        <button onClick={() =>setProfile([])}>clear all</button>
      </section>
  </main>)
}

export default App;
