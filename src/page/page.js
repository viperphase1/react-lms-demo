import { useContext } from 'react';
import { context } from '../context.js';
import PageNav from './page-nav/page-nav.js';
import './page.css';

function Page() {
    const state = useContext(context);
    const page = state.classes[state.class - 1].pages[state.page - 1];
    return (
        <div className="page">
            <PageNav page={page}></PageNav>
            <div className="page-content">
                <h2>{page.title}</h2>
                <p>{page.content}</p>
            </div>
        </div>
    );
  }
  
  export default Page;