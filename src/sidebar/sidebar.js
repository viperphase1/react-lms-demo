import Dropdown from "react-dropdown";
import { useContext } from 'react';
import { context, dispatchContext } from '../context.js';
import 'react-dropdown/style.css';
import './sidebar.css';

function Sidebar() {
    const dispatch = useContext(dispatchContext);
    const state = useContext(context);
    const dropDownOptions = state.classes.map((cls, idx) => ({value: idx + 1, label: cls.subject}));
    function selectClass(opt) {
        dispatch({
            type: 'changeClass',
            classNum: opt.value
        });
    }
    return (
        <div className="sidebar">
            <Dropdown options={dropDownOptions} value={dropDownOptions[state.class - 1]} onChange={selectClass}></Dropdown>
            <ul>
                {state.classes[state.class - 1].pages.map((pg, idx) => (
                    <li key={'page' + idx} onClick={() => {
                        dispatch({type: 'changePage', pageNum: idx + 1})
                    }}>{idx + 1}. {pg.title}</li>
                ))}
            </ul>
        </div>
    );
  }
  
  export default Sidebar;