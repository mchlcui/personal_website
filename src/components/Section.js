import React from "react"
import { Button } from "./Button"
import '../App.css'
import './Section.css';
import headshot from '../images/Michael Cui Headshot.jpeg';
import background from '../images/background.png';
import { useEffect, useRef } from "react";
import Typed from "typed.js";


function Section() {
    const typedRef = useRef(null);
    const typedStringsRef = useRef(null);
  
    useEffect(() => {
      const typed = new Typed(typedRef.current, {
        stringsElement: typedStringsRef.current,
        typeSpeed: 50, // Speed in milliseconds per character
        backSpeed: 25, // Backspacing speed
        loop: true     // Loop the animation indefinitely
      });
  
      // Clean up function
      return () => {
        typed.destroy();
      };
    }, []);

    return (
        
        <div className = 'section-container' style={{color:'white'}}>
            
            <img src={background} className="background"/>
            
            
            <img src={headshot} className="my-image"/>
            <p className="intro-paragraph">Hi, I am Michael <br></br><br></br><br></br> Computer Science & Business Student at The University of British Columbia 
            </p>

            <div ref={typedStringsRef} style={{ display: 'none' }} className="typing-animation">
            <p>I want to be a Software Engineer</p>
            <p>I want to be a Good Person</p>
            
            </div>

      <span id="typed" ref={typedRef}></span>
            <div className="section-btns" >

                <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                Contact Me <i className="far fa-play-circle" />
                </Button>

            </div>
        </div>
    )
}

export default Section;







