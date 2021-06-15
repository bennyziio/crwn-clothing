import React from "react";
import { Route } from "react-router-dom";
//import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";

// import { updateCollections } from "../../redux/shop/shop.actions";
//import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
// import {
//   //selectIsCollectionFetching,
//   selectIsCollectionLoaded,
// } from "../../redux/shop/shop.selectors";

//import WithSpinner from "../../components/with-spinner/with-spinner.component";

//import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
//import CollectionPage from "../collection/collection.component";
import CollectionPageContainer from "../collection/collection.container";

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);
/*
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);
*/
// change to class function
class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    // nasty method below
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-db-4ee0e/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));
    // Promise Pattern
    // collectionRef.get().then((snapshot) => {
    //   // console.log(snapshot);
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   // console.log(collectionsMap);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     // console.log(snapshot);
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     // console.log(collectionsMap);
    //     updateCollections(collectionsMap);
    //     this.setState({ loading: false });
    //   }
    // );
    //const { fetchCollectionsStartAsync } = this.props;
    //fetchCollectionsStartAsync();
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    //const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    const { match } = this.props;
    // const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          // render={(props) => (
          //   <CollectionsOverviewWithSpinner
          //     isLoading={isCollectionFetching}
          //     {...props}
          //   />
          // )}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          // render={(props) => (
          //   <CollectionPageWithSpinner
          //     isLoading={!isCollectionsLoaded}
          //     {...props}
          //   />
          // )}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   //isCollectionFetching: selectIsCollectionFetching,
//   //isCollectionsLoaded: selectIsCollectionLoaded,
// });

const mapDispatchToProps = (dispatch) => ({
  // updateCollections: (collectionsMap) =>
  //   dispatch(updateCollections(collectionsMap)),
  //fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

//export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
export default connect(null, mapDispatchToProps)(ShopPage);
