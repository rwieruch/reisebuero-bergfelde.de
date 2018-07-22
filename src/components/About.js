import React from 'react';
import { FaCloudDownload } from 'react-icons/lib/fa';

import profilePic from '../assets/images/profilepic.jpg';

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>Über Uns</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Kontakt</h2>
            <p className="address">
              <span>Heike Wieruch</span>
              <br />
              <span>
                Birkenwerderstraße 6
                <br /> 16562 Hohen Neuendorf
              </span>
              <br />
              <span>Telefon: 03303 504137</span>
              <br />
              <span>E-Mail: hallo@bergfelde-reisen.de</span>
            </p>
          </div>

          <div className="columns contact-details">
            <h2>Öffnungszeiten</h2>
            <p className="address">
              <span>Montag - Freitag:</span>
              <br />
              <span>10:00 Uhr - 18:00 Uhr</span>
              <br />
              <span>Samstag:</span>
              <br />
              <span>10:00 Uhr - 15:00 Uhr</span>
              <br />
              <span>Sonntag: geschlossen</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
