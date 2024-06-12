import './App.css';
import Header from './header/header.js';
import Sidebar from './sidebar/sidebar.js';
import Page from './page/page.js';
import { useReducer } from 'react';
import { useState, useEffect } from 'react';
import { context, dispatchContext } from './context.js';
import { defaultState }  from './state.js';
import LoginForm from './login/login.js';

function App() {
  const [state, dispatch] = useReducer(
    stateReducer,
    defaultState,
  );

  const userIdx = state.user;
  const showLoginForm = state.showLoginForm;

  return (
    <context.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        
        <div className="App">
          <Header/>
          {userIdx & !showLoginForm ? <>

            <div className="therest">
              <div className="theleft">
              <Sidebar/>
              </div>
              <div className = "theright">
              <Page/>
              </div>
            </div>

            </>: <LoginForm/> }


        </div>
      </dispatchContext.Provider>
    </context.Provider>
  );
}

function stateReducer(state, action) {
  switch (action.type) {
    case 'changeCourse': {
      return {
        ...state,
        course: action.courseNum,
        page: 0
      };
    }
    case 'changePage': {
      return {
        ...state,
        page: action.pageNum
      }
    }
    case 'changeUser': {
      return {
        ...state,
        user: action.userNum
      }
    }
    case 'updateShowLoginForm': {
      return {
        ...state,
        showLoginForm: action.value
      }
    }
    case 'changeAllData': {
      return {
        ...state,
        alldata: action.alldata
      }
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default App;
