import { createSelector } from 'reselect';

/**
 * Direct selector to the languageToggle state domain
 */
const getMockData = (state) => {
  console.log(state); return state
};
const getCurrentCompany = () => createSelector(
  getMockData(),
  (data) => {
    console.log(data);
    return data
  }
);

const selectData = () => createSelector(
  getMockData(),
  getCurrentCompany()
);

export {
  getCurrentCompany,
  getMockData
};
