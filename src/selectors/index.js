import { createSelector } from "reselect";
import lodash from "lodash";

export const getIntegerList = state => {
  return state.ressources.ressourceList;
};

export const getContainsOnelist = state => {
  return getIntegerList(state).filter(r => r.toString().indexOf("1") > -1);
};

export const getPrimeNumberList = state => {
  return getIntegerList(state).filter(r => isPrimeNumber(r));
};

const isPrimeNumber = value => {
  for (let index = 2; index < value; index++) {
    if (value % index === 0) {
      return false;
    }
  }
  return value > 1;
};

export const getspecialNumbersList = createSelector(
  getContainsOnelist,
  getPrimeNumberList,
  (containsOnelist, primeNumbers) => {
    return lodash.intersection(containsOnelist, primeNumbers);
  }
);
