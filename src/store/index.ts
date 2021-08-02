import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import ExampleReducer from "./example/reducers";
import UserlistReducer from "./userlist/reducers";
import BuddyAvatarReducer from "./BuddyAvatar/reducers";
import MusicTimeReducer from "./MusicTime/reducers";

const rootReducer = combineReducers({
  userlist: UserlistReducer,
  buddylist: BuddyAvatarReducer,
  musictimelist: MusicTimeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
const configureStore = (): any => {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
};

export default configureStore;
