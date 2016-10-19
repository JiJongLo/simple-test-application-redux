/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS,List } from 'immutable';
import {
  GETTING_DATA,
  SET_NEW_COMPANY
} from './constants';

const initialState = fromJS({
  data: List([]),
  current : 'All companies'
});

function dataProviderReducer(state = initialState, action) {
  switch (action.type) {
    case GETTING_DATA:
      return state
        .set('data', action.payload);
    case SET_NEW_COMPANY:
      return state
        .set('current', action.name);
    default:
      return state;
  }
}

export default dataProviderReducer;
