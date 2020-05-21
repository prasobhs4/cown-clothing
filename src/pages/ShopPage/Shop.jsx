import React, { Component } from 'react';
import SHOP_DATA from '../../Json/SHOP_DATA';
import CollectionPreview from '../../components/collectionpreview/CollectionPreview';


class Shop extends Component {
    constructor(props) {
        super(props);
       this.state = {
           collections:SHOP_DATA
       }
    }


    render() {
        const {collections} = this.state;

        return (
            <div className='shop-page'>
             {collections.map(({id,...otherprops}) => 
               <div key={id}>  
                <CollectionPreview {...otherprops} />
               </div> )} 
            </div>
        );
    }
}


export default Shop;