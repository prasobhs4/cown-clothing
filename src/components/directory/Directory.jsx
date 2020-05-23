import React from 'react';
import MenuItem from '../menuitem/MenuItem.jsx';
import './directory.css';
import {connect} from 'react-redux';

const Directory =({sections}) => {
   
        return (
            <div className='directory-menu'>
               {sections.map
                (({id,imageUrl,title,size,linkUrl}) => 
                
                   <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} linkUrl={linkUrl}/>
                 
                 )}
            </div>
        );
    }

const mapStateToProps = ({sections}) => ({
  sections:sections
})

export default connect(mapStateToProps)(Directory);