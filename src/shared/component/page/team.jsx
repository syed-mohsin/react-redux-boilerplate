// @flow

import React from 'react'

import {
  STATIC_PATH,
} from '../../config'

const profiles = [
  {
    name: 'Taka Koizumi',
    imageUrl: `${STATIC_PATH}/img/taka-koizumi.jpg`,
    title: 'CEO',
    bio: `Taka was born in a country with the highest ramen bowls per capita, grew
          up in Malaysia and studied Mechanical Engineering at the University of Rochester.
          Soon after, he worked at a commercial solar development company as the first employee.
          In his free time, he likes to play tennis and squash, and cook South East Asian cuisine.`,
  },
  {
    name: 'Syed Mohsin',
    imageUrl: `${STATIC_PATH}/img/syed-mohsin.jpg`,
    title: 'CTO',
    bio: `Syed stumbled into the world of cleantech while hacking into a smart-energy
          grid. After completing his B.S. and M.S. in Electrical Engineering and Computer
          Science at Columbia University and working at solar companies in New York and
          California, Syed co-founded Braquet to make solar cheaper and bring greater quality
          and transparency to the cleantech industry.`,
  },
  {
    name: 'Blaise Najafi',
    imageUrl: `${STATIC_PATH}/img/blaise-najafi.jpg`,
    title: 'Software Engineer',
    bio: `Blaise, a native of Arizona, has always been fascinated by solar and the
          potential benefits it can provide to all of humanity. It was this interest
          that led him to study physics in college. He hopes to apply his more recent
          passion for software engineering to help push the solar industry forward. He
          has been contributing to the development of Braquet ever since finishing his
          MS in Computer Science at Arizona State University.`,
  },
  {
    name: 'Danh Le',
    imageUrl: `${STATIC_PATH}/img/danh-le.jpg`,
    title: 'Data Scientist',
    bio: `Danh grew up in Rochester, NY. He graudated from the University of Rochester
          with three majors in Math, Statistics and Economics with a 4.0 GPA. After graduation,
          he worked at Met Life as an actuary and started his own SAT/ACT tutoring company. Outside
          the office, he likes to research alternative medicine and play basketball.`,
  },
]

const TeamPage = () => (
  <div className="container-fluid mt-5 mb-5 ml-md-5 mr-md-5 ml-0 mr-0 pb-4">
    <ul className="list-group">
      {profiles.map(profile => (
        <li key={profile.name} className="media mb-3 p-2 d-flex flex-column flex-sm-row" style={{ borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgb(211, 211, 211)' }}>
          <img className="d-flex mb-2" src={profile.imageUrl} alt={`${profile.name} Profile`} width="175" />
          <div className="ml-2 media-body">
            <h5>{profile.name}</h5>
            <p>{profile.title}</p>
            <p>
              {profile.bio}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default TeamPage
