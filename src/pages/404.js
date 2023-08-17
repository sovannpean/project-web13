import React from 'react'
import { useNavigate } from 'react-router-dom'
import lottie from '../lotties/animation_lldni3bz.json'
import { useLottie } from 'lottie-react';

export default function NotFound() {
    const options = {
        animationData : lottie,
        loop: true
    };
    const{View} = useLottie(options);
    const navigate = useNavigate()
  return (
        <main className="container my-5">
            <div className="p-5 text-center bg-body-tertiary rounded-3">
               
                <h1 className="text-body-emphasis">The page you are visiting is not found.</h1>
                <p className="col-lg-8 mx-auto fs-5 text-muted">
                This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive <code>.col-*</code> className, and a customized call to action.
                </p>
                <div className="d-inline-flex gap-2 mb-5">
                <button 
                    onClick={() => navigate("/")}
                    className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                    Return homepage
                    <svg className="bi ms-2" width="24" height="24"></svg>
                </button>
                </div>
            </div>

            <div className="container my-5">
                {View}
            </div>
        </main>

  )
}
