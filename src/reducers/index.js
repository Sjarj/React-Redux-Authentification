import { combineReducers } from 'redux';
import AuthentificationReducer from './authentification';
import ActionInfoReducer from './action-info';
import RessouresReducer from './ressources';
import { reducer as form } from 'redux-form';
import ErrorReducer from './error';

const rootReducer = combineReducers({
  form,
  authentification: AuthentificationReducer,
  actionInfo: ActionInfoReducer,
  ressources: RessouresReducer,
  error: ErrorReducer
});

export default rootReducer;
