import React from "react";
import "./style.scss";
import staff_prince from "../../../../images/staff/prince.jpg"


function FrontTeam() {
   
    return (
     <div className="front-team-container">
      <div className="container">	
	
	<div className="product-details">
		
	<h1>Prince Shrestha</h1>
	
		
			<p className="information">Secretarial assignments include such duties as office coordination, scheduling meetings, preparing and maintaining office records, reports, and correspondence pertaining to the professional(s)'s and/or management staff's area of responsibility.</p>

		
	
</div>
	
<div className="image">
	
	{/* // <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/> */}
  <img src={staff_prince} alt=""/>


<div className="info">
	<h2> Description</h2>
	<ul>
		<li><strong>Designation : </strong>Secretary </li>
		<li><strong>Contact : </strong>9805988809</li>
		<li><strong>Whatsapp: </strong>9805988809</li>
		<li><strong>Material: </strong>Eco-Friendly</li>
		
	</ul>
</div>
</div>

</div>






     </div>
    );
}

export default FrontTeam;
