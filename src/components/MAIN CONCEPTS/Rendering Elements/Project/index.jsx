import React from 'react'
import './style.css'
import { AiFillGithub } from 'react-icons/ai'
import { MdDarkMode } from 'react-icons/md'
export default function Project() {
    const h1 = <h1>Timer</h1>
    return (
        <div className='time-container w-100 bg-light d-flex justify-content-center align-content-center flex-column'>
            <div className="row w-100 d-flex justify-content-end">
                <div className="time-body d-flex justify-content-evenly align-items-center">
                    <div className="figma border border-1 rounded rounded-3 me-2 d-flex justify-content-center align-items-center">
                        <a href="https://github.com/Shaxzod2002/React-Tutarial" target={'_blank'} className='text-dark d-flex justify-content-center align-items-center'>
                            <AiFillGithub />
                        </a>
                    </div>
                    <div className="dark-mode border border-1 rounded rounded-3 d-flex justify-content-center align-items-center">
                        <MdDarkMode />
                    </div>
                </div>
            </div>
            <div className="time-header w-50 rounded rounded-3 align-self-center">
                <h1 className='text-center text-uppercase'>{h1}</h1>
                <div className="date-time d-flex justify-content-evenly align-items-center">
                    <div className="hours w-25 h-25  d-flex justify-content-center align-items-center flex-column">
                        <h1 className='w-75 text-center border border-1 border-dark rounded rounded-2'>{new Date().getHours()}</h1>
                        <p className='text-capitalize'>hours</p>
                    </div>
                    <div className="minutes w-25 h-25  d-flex justify-content-center align-items-center flex-column">
                        <h1 className='w-75 text-center border border-1 border-dark rounded rounded-2'>{new Date().getMinutes()}</h1>
                        <p className='text-capitalize'>minutes</p>
                    </div>
                    <div className="seconds w-25 h-25  d-flex justify-content-center align-items-center flex-column">
                        <h1 className='w-75 text-center border border-1 border-dark rounded rounded-2'>{new Date().getSeconds()}</h1>
                        <p className='text-capitalize'>seconds</p>
                    </div>
                </div>
                <div className="line w-75 rounded rounded-2 bg-danger d-flex mt-5"></div>
            </div>
            <div className="footer d-flex justify-content-between mx-4">
                <div className="link">
                    <p>My Link Web Site <a href="https://webshohdev.uz" className='text-dark' target={'_blank'}>WebShohDev</a></p>
                </div>
                <div className="link">
                    <p>
                        <a href="https://figma.com" className='text-dark' target={'_blank'}>Figma</a>
                    </p>
                </div>
                <div className="link">
                    <p>
                        By <a href="https://webshohdev-react.netlify.app" className='text-dark' target={'_blank'}>Shaxzodbek Raximov</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
