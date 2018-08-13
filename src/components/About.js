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
          Ob Bergsteiger oder Meeresanbeter, Entdecker oder Faulenzer - Urlaub
          ist fantastisch! Und damit bereits Ihre Urlaubsplanung so entspannt
          wie möglich verläuft, helfen wir Ihnen, Ihre Traumreise
          zusammenzustellen.
        </p>
        <p>
          Bereits seit 1996 stelle ich, Heike Wieruch, meinen Kunden Reisen ganz
          nach ihren individuellen Wünschen im Reisebüro Bergfelde zusammen. Seit 2010 unterstützt mich
          dabei Silvia Bürst. Gemeinsam haben wir es uns zur Aufgabe gemacht,
          Ihren Urlaub nicht nur schön, sondern unvergesslich zu machen.
          Umfassendes Reisewissen, persönlicher Service und eine große
          Angebotsvielfalt zeichnen uns aus. Wir möchten, dass Sie Ihren Urlaub
          entspannt und sorgenfrei genießen können und deswegen sind wir nicht
          nur vor, sondern auch während und nach Ihrer Reise stets für Sie da.
        </p>
        <p>
          Ob Last Minute- oder Frühbucher, Pauschalreise, Kreuzfahrttrip oder
          individuelle Zusammenstellung - wir finden genau den Urlaub, der zu
          Ihnen passt. Lassen Sie sich von uns beraten.
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
              <span>E-Mail: info@reisebuero-bergfelde.de</span>
            </p>
          </div>

          <div className="columns contact-details">
            <h2>Öffnungszeiten</h2>
            <p className="address">
              <span>Montag, Dienstag, Donnerstag, Freitag:</span>
              <br />
              <span>10:00 Uhr - 18:00 Uhr</span>
              <br />
              <span>Mittwoch:</span>
              <br />
              <span>10:00 Uhr - 14:00 Uhr</span>
              <br />
              <span>Samstag:</span>
              <br />
              <span>10:00 Uhr - 12:00 Uhr</span>
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
