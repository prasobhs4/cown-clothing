import React, { Component } from 'react';
import sections from '../../Json/HOME-Sections.js'
import MenuItem from '../menuitem/MenuItem.jsx';
import './directory.css'

console.log(sections);
class Directory extends Component {
    constructor(props) {
        super(props)
        this.state = sections;
    }

   
    render() {
      
        return (
            <div className='directory-menu'>
               {this.state.sections.map
                (({id,imageUrl,title,size}) => 
                
                   <MenuItem key={id} imageUrl={imageUrl} title={title} size={size}/>
                 
                 )}
            </div>
        );
    }
}


export default Directory;