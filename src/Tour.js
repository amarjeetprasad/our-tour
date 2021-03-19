import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,removeItem}) => {
const [Info,setInfo]=useState(info.slice(0,150));
const [readMsg,setReadMsg] = useState("Read More");
const [isReadMoreClicked,setIsReadMoreClicked] = useState(true);

function fullInfo()
{
  setInfo(info);
  setReadMsg("Read Less")
  setIsReadMoreClicked(false);
} 
function halfInfo()
{
  setInfo(info.slice(0,150));
  setReadMsg("Read More")
  setIsReadMoreClicked(true);
}



  return <article className="single-tour">
    <img src={image} alt={name}/>
    <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{Info}..<i className="read-msg" onClick={!isReadMoreClicked?halfInfo:fullInfo}>{readMsg}</i></p>
        <button className="delete-btn" onClick={()=>removeItem(id)}>Not Interested</button>
    </footer>
  </article>;
};

export default Tour;
