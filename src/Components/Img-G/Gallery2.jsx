import React from 'react'


const Gallery2 = ({ onClickAll, all, onClick, filters }) => {
  return ((
    <form className='glry_btns'>
      <ul>
        <li onClick={onClickAll}>
          <input type="checkbox" checked={all} readOnly />
          <label htmlFor="all">All</label>
        </li>   
        {filters.map((filter, i) => (   
          <li key={i} data-index={i} onClick={onClick}> 
            <input id={filter.name} type="checkbox" checked={filter.status} readOnly /> 
            <label htmlFor={filter.name}>{filter.name}</label>  
          </li>
        ))}
      </ul>
    </form>
  )
  )
};


export default Gallery2