import CollectionsActionTypes from './collections.type';

const INITIAL_STATE = {
  collections: {},
  query: {},
  isFetching: false,
  isFetchingQuery: false,
  errorMessage: undefined,
  isLoaded: false,
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionsActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case CollectionsActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: { ...state.collections, [action.payload.category]: action.payload.collection },
        isLoaded: true,
      };
    case CollectionsActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case CollectionsActionTypes.FETCH_COLLECTIONS_OFFLINE:
      return {
        ...state,
        isFetching: false,
        isLoaded: true,
        collections: action.payload
      }
    case CollectionsActionTypes.FETCH_QUERY_START:
      return {
        ...state,
        isFetchingQuery: true
      }
    case CollectionsActionTypes.FETCH_QUERY_SUCCESS:
      return {
        ...state,
        isFetchingQuery: false,
        query: action.payload,
      };
    case CollectionsActionTypes.FETCH_QUERY_FAILURE:
      return {
        ...state,
        isFetchingQuery: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default collectionsReducer;