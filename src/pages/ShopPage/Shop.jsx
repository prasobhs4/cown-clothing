import React from 'react';
import {Route} from 'react-router-dom';
import Collections from '../Collections/Collections';

import CollectionOverview from '../../components/collectionOverview/CollectionOverview';


const Shop = ({match}) => {


        return (
            <div className='shop-page'>
               <Route exact path ={match.path} component={CollectionOverview}/>
               <Route path ={`${match.path}/:categoryId`} component={Collections}/>
            </div>
        );

}


export default Shop;