import React from 'react'
import './menuitem.scss';
import {Link} from 'react-router-dom';

const MenuItem = ({imageUrl ,title,size='normal',linkUrl}) => {

    return (

       
        <div style={{backgroundImage : `url(${imageUrl})`}} className={`${size} menu-item`}>
        <Link to={linkUrl}>   
                  <div className='content'>
                  <h1 className='title'>{title.toUpperCase()}</h1>
                  <span className='subtitle'>SHOP NOW</span> 
                  </div>
           </Link>
          
        </div>
      
    )
}


export default MenuItem
