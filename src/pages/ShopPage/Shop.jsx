import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Collections from "../Collections/Collections";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collectionOverview/CollectionOverview";
import SpinnerComponent from "../../components/Spinner/SpinnerComponent";
import { fetchCollectionStart } from "../../components/Redux/Shop/shopAction";
const CollectionOverviewwithSpinner = SpinnerComponent(CollectionOverview);
const CollectionswithSpinner = SpinnerComponent(Collections);

const Shop = ({ fetchCollectionStart, match, isCollectionsLoading }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={match.path}
        render={(props) => (
          <CollectionOverviewwithSpinner
            isLoading={isCollectionsLoading}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={(props) => (
          <CollectionswithSpinner isLoading={isCollectionsLoading} {...props} />
        )}
      />
    </div>
  );
};

const mapStateToProps = ({ isCollectionsLoading }) => ({
  isCollectionsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
