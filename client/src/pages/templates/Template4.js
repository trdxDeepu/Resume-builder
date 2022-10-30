import React from 'react'
import "../../resources/template4.css"
import Luffy from '../../Images/luffy.png';
import { Image } from '@chakra-ui/react'


const Template4 = () => {
  const user = JSON.parse(localStorage.getItem("Resume_build-user"));
  return (
    <div className="resume_wrapper">
      <div className="resume_wrapper">

        <div className="resume_left">
          <div className="resume_image">
            <Image
              borderRadius='full'
              boxSize='150px'
              src={Luffy}
              alt='Resume_image'
            />
          </div>

          <div className="resume_bottom">
            <div className="resume_item resume_namerole">
              <div className="name">{user.firstName} {user.lastName}</div>

            </div>

            <div className="resume_item resume_profile">
              <div className="resume_title">Profile</div>
              <div className="resume_info">{user.carrierObjective}</div>
            </div>

            <div className="resume_item resume_address">
              <div className="resume_title">Address</div>
              <div className="resume_info">{user.address}</div>
            </div>

            <div className="resume_item resume_contact">
              <div className="resume_title">Contact</div>
              <div className="resume_info">
                <div className="resume_subtitle">Phone</div>
                <div className="resume_subinfo">{user.mobileNumber}</div>
              </div>
              <div className="resume_info">
                <div className="resume_subtitle">Email</div>
                <div className="resume_subinfo">{user.email}</div>
              </div>
              <div className="resume_info">
                <div className="resume_subtitle">github</div>
                <div className="resume_subinfo">{user.Github}</div>
              </div>
              <div className="resume_info">
                <div className="resume_subtitle">Linkden</div>
                <div className="resume_subinfo">{user.linkden}</div>
              </div>
            </div>

            <div className="resume_item resume_skills">
              <div className="resume_title">Skills</div>
              {user.skills.map((skill) => {

                return (

                  <div className="resume_info">
                    <div className="skill_list">
                      <div className="skill_left">{skill.technology}</div>
                    </div>
                  </div>

                )
              })}


            </div>



          </div>

        </div>


        <div className="resume_right">
          <div className="resume_item resume_namerole">
            <div className="name">{user.firstName} {user.lastName}</div>
          </div>

          <div className="resume_item resume_education">
            <div className="resume_title">Education</div>
            {user.education.map((edu) => {

              return (

                <div className="resume_info">
                  <div className="resume_date">{edu.range}</div>
                  <div className="content1"><p>{edu.qualification}</p>
                    <br />
                    <p>{edu.institution}</p>
                  </div>

                </div>

              )

            })}

          </div>

          <div className="resume_item resume_experience">

            <div className="resume_title">Experience</div>

            {user.experience.map((exp) => {

              return (
                <div className="resume_info">

                  <div className="resume_date">{exp.range}</div>
                  <div className="content1">
                    <p>{exp.company}</p>
                    <p>{exp.position}</p>
                    <p>{exp.description}</p>
                  </div>
                </div>

              )

            })}

          </div>

          <div className="resume_item resume_interests">
            <div className="resume_title">Interests</div>
            {user.intrest.map((inter) => {
              return (
                <div className="resume_info">
                  <div className="int_data">{inter.intrest}</div>
                </div>

              )

            })}
          </div>


        </div>

      </div>
    </div>
  )
}

export default Template4