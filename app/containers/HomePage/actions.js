import {
  GETTING_DATA,
  SET_NEW_COMPANY
} from './constants';
const pkg = require('../../data.json');

export function getSomeData() {
  return {
    type: GETTING_DATA,
    payload : pkg.flights
  }
}
export function setCompany(value) {
  return {
    type: SET_NEW_COMPANY,
    name : value
  }
}
