import React from "react";
import "./style.scss";




function Cards2 ({image,title,text}){
  return (
	<div className="card2">
	<div className="card-image">
		<img src={image}/>
	</div>
	<div className="card-text">
	
	  <h2>{title}</h2>
	  <p>{text}</p>
	</div>

  </div>
    

	
	

  )
}

export default Cards2;
