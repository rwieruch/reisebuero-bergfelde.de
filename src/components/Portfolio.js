import React from 'react';
import { FaPlus, FaTag } from 'react-icons/lib/fa';

import Coffee from '../assets/images/portfolio/coffee.jpg';
import Console from '../assets/images/portfolio/console.jpg';
import Judah from '../assets/images/portfolio/judah.jpg';
import IntoTheLight from '../assets/images/portfolio/into-the-light.jpg';
import Farmerboy from '../assets/images/portfolio/farmerboy.jpg';
import Girl from '../assets/images/portfolio/girl.jpg';
import Origami from '../assets/images/portfolio/origami.jpg';
import Retrocam from '../assets/images/portfolio/retrocam.jpg';

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Bestimmtes Urlaubsziel gesucht? Wir haben es.</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.lonelyplanet.com/indonesia/bali"
              >
                <img alt="" src={Coffee} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Bali</h5>
                    <p>Yoga, Meditation, and Health</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" rel="noopener noreferrer" href="#">
                <img alt="" src={Console} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Console</h5>
                    <p>Web Development</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" rel="noopener noreferrer" href="#">
                <img alt="" src={Judah} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Judah</h5>
                    <p>Webdesign</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" rel="noopener noreferrer" href="#">
                <img alt="" src={IntoTheLight} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Into The Light</h5>
                    <p>Photography</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" rel="noopener noreferrer" href="#">
                <img alt="" src={Farmerboy} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Farmer Boy</h5>
                    <p>Branding</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" rel="noopener noreferrer" href="#">
                <img alt="" src={Girl} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Girl</h5>
                    <p>Photography</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" rel="noopener noreferrer" href="#">
                <img alt="" src={Origami} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Origami</h5>
                    <p>Illustrration</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" rel="noopener noreferrer" href="#">
                <img alt="" src={Retrocam} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Retrocam</h5>
                    <p>Web Development</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
