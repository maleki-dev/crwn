import { connect } from "react-redux";
import { compose } from "redux";
import { selectIfCollectionLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import Collection from "./collection.component";

const mapStateToProps = (state) => ({
  isLoading: !selectIfCollectionLoaded(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
