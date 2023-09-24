import './variables.css';
import './App.css';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Page from './page/page';
import { useReducer } from 'react';
import { context, dispatchContext } from './context.js';
import { defaultState } from './state';

function App() {
  const [state, dispatch] = useReducer(
    stateReducer,
    defaultState
  );
  return (
    <context.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        <div className="App">
          <Header></Header>
          <div className="post-header">
            <Sidebar></Sidebar>
            <Page></Page>
          </div>
        </div>
      </dispatchContext.Provider>
    </context.Provider>
  );
}

function stateReducer(state, action) {
  switch (action.type) {
    case 'changeClass': {
      return {
        ...state,
        class: action.classNum,
        page: 1
      };
    }
    case 'changePage': {
      return {
        ...state,
        page: action.pageNum
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default App;
