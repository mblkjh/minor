import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Shome';
import Smessages from './Smessages';
import MySearch from './Interests';
import Create from './CreateSearch';
import Login from './Slogin';
import Listview from './Listview';
import Readmore from './ReadMore';

 //import Signup from './ReadMore';
// import Slogout from './ReadMore';
import "../../App.css";
const Post = () => {
return (
  <>
    <Routes>
           <Route path='/search' element={<Home />} />
           <Route path='/smessages' element={< Smessages/>} />
           <Route path='/Slogin' element={<Login />} />
           {/* <Route path="/listview" element={<Listview />} /> */}
           <Route path="/slogout" element={<Readmore />} />
           {/* <Route path='/ssmessages' element={<Signup />} /> */}
           {/* <Route path='/slogout' element={<Slogout />} /> */}
     </Routes>
     </>
   )
};

export default Post;