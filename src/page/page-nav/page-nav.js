import { useContext } from 'react';
import { context, dispatchContext } from '../../context.js';
import './page-nav.css';

function PageNav(props) {
    const state = useContext(context);
    const dispatch = useContext(dispatchContext);
    const cls = state.classes[state.class - 1];
    return (
        <div className="page-nav">
            <div className={`caret left ${state.page < 2 ? "hidden" : ""}`} onClick={() => {
                dispatch({
                    type: 'changePage',
                    pageNum: state.page - 1
                })
            }}></div>
            <h4>{props.page.title}</h4>
            <div className={`caret right ${state.page >= cls.pages.length ? "hidden" : ""}`} onClick={() => {
                dispatch({
                    type: 'changePage',
                    pageNum: state.page + 1
                })
            }}></div>
        </div>
    );
  }
  
  export default PageNav;