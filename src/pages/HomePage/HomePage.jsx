import React from 'react';
import './HomePage.scss'
import Directory from '../../components/directory/Directory';
import {HomePageStyle} from './homePageStyle';



const HomePage = () => {




    return (
      <HomePageStyle>
        <div className='directory-menu'>
            <Directory/>
        </div>
      </HomePageStyle>

    )

}


export default HomePage;
