import React, { Component } from 'react';
import SHOP_DATA from '../../Json/SHOP_DATA';
import CollectionPreview from '../../components/collectionpreview/CollectionPreview';

console.log(SHOP_DATA);
class Shop extends Component {
    constructor(props) {
        super(props);
       this.state = {
           collections:SHOP_DATA
       }
    }


    render() {
        const {collections} = this.state;
        console.log(collections)
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