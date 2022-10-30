import React from 'react'
import Luffy from '../../Images/luffy.png'
import Location from '../../Images/location.png'
import Call from '../../Images/call.png'
import Mail from '../../Images/mail.png'
import '../../resources/template6.css'
import Github from '../../Images/github.png'
import Linkden from '../../Images/linkedin.png'
import User from '../../Images/user.png'
import Pencil from '../../Images/pencil.png'
import Edu from '../../Images/edu.png'

const Template6 = () => {
  const user = JSON.parse(localStorage.getItem("Resume_build-user"));
  return (
    <div className="reusme-box1">
      <div className="resume-box">

        <div className="left-section">
          <div className="profile">
            <img src={Luffy} alt="profile" className='profile-img' />
            <div className="blue-box"></div>
          </div>
          <h2 className="name">{user.firstName}<br /><span>{user.lastName}</span></h2>
          <p className="n-p">Front End Developer</p>
          <div className="info">
            <div className="heading">Info</div>

            <p class="p1"><span class="span1"><img src={Location} /></span>Address<span> <br />{user.address}</span></p>
            <p class="p1"><span class="span1"><img src={Call} /></span>Phone<span> <br />{user.mobileNumber}</span></p>
            <p class="p1"><span class="span1"><img src={Mail} /></span>Email<span> <br />{user.email}</span></p>
          </div>
          <div class="info">/
            <p class="heading">Social</p>
            <p class="p1"><span class="span1"><img src={Github} /></span>Github<span> <br />{user.github}</span></p>
            <p class="p1"><span class="span1"><img src={Linkden} /></span>Linkden<span> <br />{user.linkden}</span></p>

          </div>

        </div>
        <div className="right-section">
          <div class="right-heading">
            <img src={User} />
            <p class="p2">Profile</p>
            <p class="p3">{user.carrierObjective}</p>
          </div>
          <div class="clearfix"></div>
          <br />

          <div class="right-heading">
            <img src={Pencil} />
            <p class="p2">Work Experience</p>

          </div>
          <div className="clearfix"></div>

          {user.experience.map((exp) => {

            return (
              <>

                <div className="lr-box">
                  <div className="left">
                    <p className='p4'>{exp.range}</p>
                    <p className='p5'>{exp.place}</p>
                  </div>
                </div>
                <div className="right">
                  <p className="p4">{exp.position}</p>
                  <p className="p5">{exp.company}</p>
                  <p className="p5">{exp.description}</p>
                </div>
              </>
            )

          })}

          <div class="clearfix"></div>
          <br />
          <div class="right-heading">
            <img src={Edu} />
            <p class="p2">Education</p>

            <div class="clearfix"></div>

            {user.education.map((edu) => {

              return (
                <>
                  <div className="lr-box">
                    <div className="left">
                      <p className="p4">{edu.range}</p>


                    </div>
                  </div>

                  <div className="right">
                    <p className="p4">{edu.qualification}</p>
                    <p className="p5">{edu.institution}</p>

                  </div>

                </>

              )

            })}
            <div class="clearfix"></div>
            <br />
            <div className="right-heading">
              <img src={Edu} />
              <p class="p2">Skill and expertize</p>

              {user.skills.map((skill) => {

                return (
                  <>
                    <div class="clearfix"></div>
                    <div class="s-box">
                      <p class="p6">{skill.technology}</p>
                      
                      <div id="progress"></div>

                    </div>

                  </>

                )

              })}

            </div>

          </div>
        </div>
      </div>
    </div >


  )
}

export default Template6