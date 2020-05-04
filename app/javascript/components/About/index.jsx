import React from 'react'
import MapComponent from './MapContainer'
import Responses from './Responses/ResponsesList'

import './styles'

const About = () => {
  return (
    <div className="content">
      <div className="content mt-5 center">
        <div className="container">
          <div className="row justify-content-center">
            <h2> What we are trying to do </h2>
          </div>
          <div className="content mt-3">
            <div className="content">
              <p className="text-abz">
                Fashion is a thing that we have to keep up with, whether you like it or not. Anyway it’s important to look
                attractive. But it doesn’t mean that you should be a fashion-conscious. It may turn to a waste of money. If a
                person doesn’t have good taste he is not able to put things together. Trendy people want to stand out in a crowd,
                but sometimes they don’t look stylish.
            </p>
            </div>

            <div className="content">
              <p className="text-abz">
                First of all, think clothes should suit you. If you have good taste you can buy a big range of styles and always
                look fashionable. But clothes should suit the occasion, and put you in the right mood for the day. But there are
                people who are not able bothered about fashion, they just want to stand out in a crowd by wearing something
                unusual, old-fashioned or trendy. Actually, I’m not such a person and I guess you should choose things according
                to your personality and character, and you’ll look well-dressed even if you wear something casual.
            </p>
            </div>

            <div className="content">
              <p className="text-abz">
                I like wearing different kinds of clothes, but certainly clothes should suit the occasion. When I plan what I’m
                going to wear I usually think what kind of meeting I have. At school we weren’t allowed to wear sport or bright
                clothes, we had to wear clothes of formal style. Usually I wore a jacket, a blouse and trousers or a skirt. But I
                didn't like being dressed that way, as many other students. Really I prefer smart clothes to formal.
            </p>
            </div>

            <br />

            <div className="content">
              <h3 className="row justify-content-center"> You can find us here </h3>
              <br />
              <MapComponent />
              <br />
            </div>

            <hr></hr>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <div className="content">
              <h2 className="row justify-content-center"> All responses about our work </h2>
              <Responses />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About
