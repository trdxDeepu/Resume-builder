import React from 'react'
import Luffy from '../../Images/luffy.png'
import '../../resources/template7.css'

const Template7 = () => {
    const user = JSON.parse(localStorage.getItem("Resume_build-user"));
    return (
        <>
        <div class="container">
        <div class="profile">
          <div class="profile_container">
            <div class="profile_profileImg">
              <img src={Luffy} alt="luffy" width="200px"/>
            </div>
            <div>
              <h1 class="profile_name">
                <span class="profile_name_firstName">{user.firstName}</span>
                <span class="profile_name_lastName">{user.lastName}</span>
              </h1>
              <p class="profile_title">Software Developer</p>
              <p class="description profile_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua. Ut enim ad minim veniam,
              </p>
             
            </div>
          </div>
        </div>
        <div class="group-1">
          <div class="skills">
            <h3 class="title">Expertise</h3>
                {user.skills.map((skill) => {

                        return(
                            <>
                            <ul class="skills_list description">
                            <li>{skill.technology}</li>
                            </ul>
                            </>

                        )

                })}
          </div>
          <div class="ref">
          <h3 class="title">Profile</h3>
             
              <p class="description">{user.carrierObjective} </p>
            
          </div>
    
          <div class="edu">
          <h3 class="title">Education</h3>
           {user.education.map((edu) =>{


                return(

                    <>
                   
                    <div class="edu_item">
                      <p class="item_preTitle">{edu.range}</p>
                      <h4 class="item_title">{edu.qualification}</h4>
                      <p class="item_subtitle">
                      {edu.institution}
                      </p>
                    </div>
                    </>
                )

           })}
          </div>
    
         
        </div>
        <div class="group-2">
          <div class="exp">
            <h3 class="title">Experience</h3>
           {user.experience.map((exp) => {

                return(
                   
                    <div class="exp_item">
                    <p class="item_preTitle">{exp.range}</p>
                    <h4 class="item_title">{exp.palace}</h4>
                    <p class="item_subtitle">{exp.position}</p>
                    <p class=" description">
                    {exp.description}
                    </p>
                  </div>
                 
                 
                )

           })}
            </div>
          </div>
          <div class="awards">
            <h3 class="title">Awards</h3>
            <div class="awards_item">
              <p class="item_preTitle">2019</p>
              <h4 class="item_title">Rashid Software LTD.</h4>
              <p class=" description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>
            <div class="awards_item">
              <p class="item_preTitle">2019</p>
              <h4 class="item_title">Rashid Software LTD.</h4>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua. Ut enim ad minim veniam,
              </p>
            </div>
          </div>
    
          <div class="interest">
            <h3 class="title">Interest</h3>
            <div class="interest_items">
              <div class="interest_item">
                <i data-feather="music"></i>
                <span>Music</span>
              </div>
              <div class="interest_item">
                <i data-feather="book"></i>
                <span>Books</span>
              </div>
              <div class="interest_item">
                <i data-feather="map"></i>
                <span>Travel</span>
              </div>
            </div>
    
          </div>
        </div>
        <hr/>
        <div class="group-3">
          <div class="contact">
            <h3 class="title">Contact</h3>
            <div class="contact_info">
              <p class="description">
                Chittagong, Bangladesh
              </p>
              <p class="description">
                +880 ** *** ***
              </p>
              <p class="description">
                shaifarfan08@gmail.com
              </p>
            </div>
          </div>
          <div class="social">
            <h3 class="title">Socials</h3>
            <div class="social_items">
              <a href="#" target="_b" class="social_item">
                <i data-feather="github"></i>
                <span>/shaifarfan</span>
              </a>
              <a href="#" target="_blank" class="social_item">
                <i data-feather="twitter"></i>
                <span>/shaifarfan08</span>
              </a>
              <a href="#" target="_blank" class="social_item">
                <i data-feather="linkedin"></i>
                <span>/shaifarfan08</span>
              </a>
            </div>
          </div>
        </div>
      
        </>
    )
}

export default Template7;