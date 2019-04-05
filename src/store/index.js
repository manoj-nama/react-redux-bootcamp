import { createStore, combineReducers } from 'redux';

import users from '../reducers/user.reducer';
import products from '../reducers/product.reducer';
import middlewares from '../middlewares';

const reducers = combineReducers({
  users,
  products
});

export const store = createStore(reducers, middlewares);