import {createStore} from "redux";
import Reducer from "./reducer";
// import rootReducer from "./reducer/rootReducer";


const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(Reducer,devtools);

export default store; 