import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectShopIsFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import Collectionoverveiw from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectShopIsFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collectionoverveiw);

export default CollectionOverviewContainer;
