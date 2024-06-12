import Dropdown from "react-dropdown";
import { useContext, useState, useEffect } from 'react';
import { context, dispatchContext } from '../context.js';
import 'react-dropdown/style.css';
import './sidebar.css';
import axios from "axios";

function Sidebar() {
    const state = useContext(context);
    const dispatch = useContext(dispatchContext);
    
      // Get the data
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = "https://backend2-ohhidyagtq-uk.a.run.app/section/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                dispatch({
                    type: 'changeAllData',
                    alldata: response.data
                });
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            // Clean-up function (optional)
            // Add any clean-up logic here
        };
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
      
    let dropDownOptions = [];
    if (state.alldata) {
        dropDownOptions = state.alldata.map((cls, idx) => 
        ({value: idx, label: cls.title}));
    }
    
    function selectCourse(opt) {
        console.log("opt:",opt.value)
        dispatch({
            type: 'changeCourse',
            courseNum: opt.value
        });
    }

    return (

        <div>
        {state.alldata ? <>
            <Dropdown options={dropDownOptions} 
            value={dropDownOptions[state.course]} onChange={selectCourse}></Dropdown>
            
            <ul>
                {state.alldata[state.course].pages.map((pg, idx) => (
                    <li key={'page' + idx} 
                    onClick={() => {dispatch({type: 'changePage', pageNum: idx})
                    }}>{idx+1}. {pg.title}</li>
                ))}
            </ul>
            </>
        : ''}
        </div>

    );
  }
  
  export default Sidebar;