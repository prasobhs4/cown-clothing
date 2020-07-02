import React from "react";
import { connect } from "react-redux";
import "./collectionOverview.scss";
import CollectionPreview from "../collectionpreview/CollectionPreview";
import { selectCollectionsPreview } from "../Redux/Shop/shopSelector";
import { createStructuredSelector } from "reselect";

export const CollectionOverview = ({ shopList }) => {
  console.log(shopList);
  return shopList ? (
    <div className="collections-overview">
      {shopList.map(({ id, ...otherprops }) => (
        <div key={id}>
          <CollectionPreview {...otherprops} />
        </div>
      ))}
    </div>
  ) : null;
};

const mapStateToProps = createStructuredSelector({
  shopList: selectCollectionsPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
