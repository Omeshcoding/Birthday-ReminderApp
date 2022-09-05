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
        <button>+</button>
          <List profile={profile} />
        
        <button onClick={() =>setProfile([])}>clear all</button>
      </section>
  </main>)
}

export default App;
