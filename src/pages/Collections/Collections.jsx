import React from "react";
import "./Collections.scss";
import { connect } from "react-redux";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

export const Collections = ({ collections }) => {
  return collections ? (
    <div className="collection-page">
      <h2 className="title">{collections.title}</h2>
      <div className="items">
        {collections.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  ) : null;
};

const mapStateToProps = ({ shop: { collections } }, ownProps) => {
  const categoryId = ownProps.match.params.categoryId;
  let collectionArray, finalCollections;
  if (collections) {
    collectionArray = Object.keys(collections).map((key) => collections[key]);
    finalCollections = collectionArray.find(
      (cur) => cur.title.toLowerCase() === categoryId.toLowerCase()
    );
  }

  return {
    collections: finalCollections,
  };
};

export default connect(mapStateToProps)(Collections);
