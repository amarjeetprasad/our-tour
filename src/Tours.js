import React from 'react';
import Tour from './Tour';
const Tours = ({data,removeItem}) => {
  return <section>
  <div className="title">
    <h2>Ours Tours</h2>
    <div className="underline"></div>
  </div>
  <div>
    {
      data.map(tour=><Tour key={tour.id} {...tour} removeItem={removeItem}/>)
    }
  </div>
  </section>;
};

export default Tours;
