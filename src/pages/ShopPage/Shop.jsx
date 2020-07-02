import React from "react";
import { Route } from "react-router-dom";
import Collections from "../Collections/Collections";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collectionOverview/CollectionOverview";
import {
  firestore,
  convertShopSnapshotToMap,
} from "../../firebase/Firebase.util";
import SpinnerComponent from "../../components/Spinner/SpinnerComponent";

import { updateCollection } from "../../components/Redux/Shop/shopAction";

const CollectionOverviewwithSpinner = SpinnerComponent(CollectionOverview);
const CollectionswithSpinner = SpinnerComponent(Collections);

class Shop extends React.Component {
  state = {
    isLoading: true,
  };
  componentDidMount() {
    const { updateCollection } = this.props;
    const shopRef = firestore.collection("Shop");
    shopRef.onSnapshot(async (snapshot) => {
      const shopMap = convertShopSnapshotToMap(snapshot);
      updateCollection(shopMap);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionOverviewwithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CollectionswithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionType) =>
    dispatch(updateCollection(collectionType)),
});

export default connect(null, mapDispatchToProps)(Shop);
