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
  current : 'All companies',
  filteredData : List([])
});

function dataProviderReducer(state = initialState, action) {
  switch (action.type) {
    case GETTING_DATA:
      return state
        .set('data', action.payload).set('filteredData', action.payload);
    case SET_NEW_COMPANY:
      return state
        .set('current', action.name)
        .set('filteredData', state.get('data').filter(function(obj){
          if(action.name == "All companies") return true;
          else return action.name == obj.carrier
        }));
    default:
      return state;
  }
}

export default dataProviderReducer;
