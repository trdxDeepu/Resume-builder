import React from 'react'
import '../../resources/templates.css'
import { FaGithub, FaLinkedin, FaRegEnvelope, FaPhoneAlt, FaMapMarker } from "react-icons/fa";

const Template3 = () => {
    const user = JSON.parse(localStorage.getItem("Resume_build-user"));
    return (
        <div className="container1">
            <div className="container">
                <div className="left_side">
                    <div className="profileText">
                        <div className="imgBox">
                            <img src={user.avatar} alt="" />
                        </div>
                        <h2>{user.firstName} {user.lastName}</h2>
                    </div>
                    <div className="contactInfo">
                        <h3 className="title">Contact Info</h3>
                        <ul>
                            <li>
                                <span className="icon"><FaPhoneAlt /></span>
                                <span className="text">{user.mobileNumber}</span>
                            </li>
                            <li>
                                <span className="icon"><FaRegEnvelope /></span>
                                <span className="text">{user.email}</span>
                            </li>
                            <li>
                                <span className="icon"><FaGithub /></span>
                                <span className="text">{user.github}</span>
                            </li>
                            <li>
                                <span className="icon"><FaLinkedin /></span>
                                <span className="text">{user.linkden}</span>
                            </li>



                            <li>
                                <span className="icon"><FaMapMarker /></span>
                                <span className="text">{user.address}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="contactInfo education">
                        <h3 className="title">Education</h3>

                        {user.education.map((education) => {
                            return (
                                <ul >
                                    <li>
                                        <h6 className='h66'>{education.range}</h6>
                                        <p className='p1'>
                                            <b>{education.qualification}</b> with{" "}
                                            <b>{education.percentage}%</b> in <span>{education.institution}</span>
                                        </p>

                                    </li>
                                </ul>


                            )

                        })}

                    </div>

                    <div className="contactInfo laungauge">
                        <h3 className="title">Laungauge</h3>
                        {user.languages.map((languages) => {

                            return (
                                <ul>
                                    <li>
                                        <span className="text">{languages.languages}</span>
                                        <span className="percent">
                                            <div className="dii" style={{ width: "90%" }}></div>
                                        </span>

                                    </li>
                                </ul>

                            )

                        })}

                    </div>


                </div>
                <div className="right_side">
                    <div className="about">
                        <h2 className="title2">Profile</h2>
                        <hr />
                        <p className='pp'>{user.carrierObjective}</p>
                    </div>
                    <div className="about">
                        <h2 className="title2">Experience</h2>
                        <hr />
                        {user.experience.map((exp) => {
                            return (
                                <div className="box">
                                    <div className="year_company">
                                        <h5>{exp.range}</h5>
                                        <h5>{exp.company}</h5>
                                    </div>
                                    <div className="text">
                                        <h4>{exp.position}</h4>
                                        <p>{exp.description}</p></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="about skills">

                        <h2 className="title2">
                            Professional Skills
                        </h2>
                        <hr />
                        {user.skills.map((skill) => {

                            return (
                                <div className="box2">
                                <h4 className='box3'>{skill.technology}</h4>
                                </div>
                            )

                        })}

                    </div>

                    <div className="about interest">
                    <h2 className="title2">Interest</h2>
                        {user.intrest.map((intrest)=>{

                            return(

                                <>
                                <ul className='ull'>
                               
                               <li>{intrest.intrest}</li>
                                </ul>
                                </>
                            )

                        })}

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Template3