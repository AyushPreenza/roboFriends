import React from 'react';
import Card from './Card';

const CardList =({ robots })=>{
	const CardComponent = robots.map((user,i) =>{
		return<Card id={robots[i].id} 
		 name ={robots[i].name} 
		 email={robots[i].email}/>
	})
	return(
	<div>
	  <React.StrictMode>
	    
	   {CardComponent}
    </React.StrictMode>
  </div>)
}

export default CardList;