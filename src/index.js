import ReactDOM from 'react-dom'
import React from 'react'
import './style.css'
import App from './App'

const open_fb = () => {
  window.open("https://www.facebook.com/vinceivan.pulido.7/");}
const open_tw = () => {
    window.open("https://twitter.com/wisdom_box");}
  
  ReactDOM.render(
  <>
   <App className="bg_planes"/>
  
  
  <div className="overlay">
     
        <div className="pages">
          <h1 className="name">
            VINCE IVAN's PORTFOLIO
          </h1> 
        </div>

      <div className="container">
        <h2 className="pointer_event">
         You can control the camera using mouse buttons and scroll-wheel <br />
         You can even use normal panning using fingers on phones <br />
          <b className="twt_name">
            By: Wisdom Cube
          </b>
          <br/>
         
          <svg 
          onClick={open_fb}
          className="svg_fb"
             aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" ></path>
          </svg> 
          <svg 
          onClick={open_tw}
          className="svg_tw"
            aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" ></path>
          </svg>
 
       </h2>
      </div>
    </div>

    
   </>,
  document.getElementById('root')
  )