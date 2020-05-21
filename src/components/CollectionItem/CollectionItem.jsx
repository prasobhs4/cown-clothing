import React from 'react'
import './collectionitem.scss'
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {additem} from '../Redux/Cart/cartAction';




const CollectionItem = ({item,additem}) => {

const {name,price,imageUrl} = item;




 const style ={
     backgroundImage:`url(${imageUrl})`
 }   
    return (
        <div className='collection-item'>
             <div style={style} className='image'/>
             <div className='collection-footer'>
              
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            
             </div>
             <CustomButton onClick={()=> {
                 additem(item)
                }
                } inverted>Add to Cart</CustomButton>
        </div>

    )
}

const mapDispatchToProps = dispatch => (
    {
   additem:item => dispatch(additem(item)),
    })

export default connect(null,mapDispatchToProps)(CollectionItem)
