import React from 'react'
import './Collections.scss';
import {connect} from 'react-redux'
import CollectionItem from '../../components/CollectionItem/CollectionItem';


export const Collections = ({collections:{title,items}}) => {

    return (
        <div className='collection-page'>
             <h2 className='title'>{title}</h2>
             <div className='items'>
               {
                   items.map(item => <CollectionItem key={item.id} item={item}/>)
               }
             </div>
        </div>
    )
}

const mapStateToProps = ({shop},ownProps) => {
        const categoryId = ownProps.match.params.categoryId;
        const finalCollections = shop.find(cur => cur.title.toLowerCase() === categoryId.toLowerCase());
    return ({
        collections:finalCollections,
    })
}

export default connect(mapStateToProps)(Collections);
