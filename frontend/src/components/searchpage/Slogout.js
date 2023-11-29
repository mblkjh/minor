import React,{useState} from 'react';
import "../../App.css";
import "./Slogout.css";
import Navbar from './Snav';
import Footer from "../mainpage/footer";
import styled from "styled-components";
import { error } from 'jquery';
import { NavLink } from "react-router-dom";


const Slogout = () => {
  const[file,setFile]=useState()

  function handleFile(event){
    setFile(event.target.files[0])
    // console.log(event.target.files[0])
  }

  function handleUpload(){
    const formData =new FormData()
    formData.append('file',file)
    fetch(
      'url',
      {
        method: "POST",
        body: formData
      }).then((response) => response.json())
      .then(
        (result) =>{
          console.log('success',result)
        }
      )
      .catch(error =>{
        console.error("Error:",error)
      })
  }
  return (
    <>
    <Navbar/>
    

    <div className='container_bo'>
    <div className='container_t'>
      <div className='head'>
        <div className='sub_head'>Apply Now !!!</div>
      </div>
      <div className='form_info'>
        <div className='first'>
          <div className='firstn'>
          <label className='label' for="first_name">
            <div className='label_head'>
              <span className='label_text'>First Name</span>
            </div>
          </label>
          <div className='input_label'>
            <input type='text' placeholder='Saumya' id='first_name'></input>
          </div>
          </div>
          <div className='lastn'>
          <div className='firstn'>
          <label className='label' for="first_name">
            <div className='label_head'>
              <span className='label_text'>Last Name</span>
            </div>
          </label>
          <div className='input_label'>
            <input type='text' placeholder='Bansal' id='last_name'></input>
          </div>
          </div>
          </div>
        </div>

        <div className='lastn'>
          <div className='firstn'>
          <label className='label' for="first_name">
            <div className='label_head'>
              <span className='label_text'>Email Id</span>
            </div>
          </label>
          <div className='input_label'>
            <input type='text' placeholder='email@gmail.com' id='last_name'></input>
          </div>
          </div>
          </div>

          <div className='lastn'>
          <div className='firstn'>
          <label className='label' for="first_name">
            <div className='label_head'>
              <span className='label_text'>Contact No.</span>
            </div>
          </label>
          <div className='input_label_phone'>
            <div>
            <input type='text' className='primary' placeholder='+91' id='phone_i'></input>
            </div>
            <div>
            <input type='text' className='phone' placeholder='contact no' id='phone'></input>
            </div>
          </div>
          </div>
          </div>

          <div className='lastn'>
          <div className='firstn'>
          <label className='label' for="first_name">
            <div className='label_head'>
              <span className='label_text'>Resume</span>
            </div>
          </label>
          <div>
            <form onSubmit={handleUpload}>
              <input type='file' name='file' onChange={handleFile}/>
              <button className='upload'>Upload</button>
            </form>
          </div>
          </div>
          </div>
          
      </div>
    </div>
    <button className='btn_f'><NavLink to="/slogin">SUBMIT</NavLink></button>
    <div className='abc'></div>
    </div>
    
    <Footer/>
    </>
  );
};



export default Slogout;