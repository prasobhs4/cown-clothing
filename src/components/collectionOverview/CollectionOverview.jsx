import React from 'react'
import {connect} from 'react-redux';
import './collectionOverview.scss';
import CollectionPreview from '../collectionpreview/CollectionPreview';


export const CollectionOverview = ({shopList}) => {

    return (
        <div className='collections-overview'>
        {shopList.map(({id,...otherprops}) => 
        <div key={id}>  
         <CollectionPreview {...otherprops} />
        </div> )}  
        </div>
    )
}

const mapStateToProps = ({shop}) => ({
    shopList:shop
  })
  

export default connect(mapStateToProps)(CollectionOverview);