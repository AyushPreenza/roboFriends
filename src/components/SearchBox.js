import React from 'react';

const SearchBox = ({searchfield,searchChange})=>{
	return(
		<div classname='pa2'>
		<input type='search' 
		placeholder='search robots'
		onChange={searchChange}/>
		
        </div>
		);
}

export default SearchBox;