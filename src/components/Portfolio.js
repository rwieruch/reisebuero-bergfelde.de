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
                <img alt="Bali" src={Coffee} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Bali</h5>
                    <p>Yoga, Meer & gesundes Essen</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" rel="noopener noreferrer" href="https://www.lonelyplanet.com/morocco">
                <img alt="Marokko" src={Console} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Marokko</h5>
                    <p>Königsstädte, Meer & Orient</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" rel="noopener noreferrer" href="https://www.lonelyplanet.com/canada">
                <img alt="Kanada" src={Judah} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Kanada</h5>
                    <p>Natur pur & Outdoorfreuden</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" rel="noopener noreferrer" href="https://www.lonelyplanet.com/australia">
                <img alt="Australien" src={IntoTheLight} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Australien</h5>
                    <p>Sonne, Strand & gute Laune</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" rel="noopener noreferrer" href="https://www.lonelyplanet.com/china">
                <img alt="China" src={Farmerboy} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>China</h5>
                    <p>Tempel, heilige Berge & gigantische Großstädte</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" rel="noopener noreferrer" href="https://www.lonelyplanet.com/botswana">
                <img alt="Botswana" src={Girl} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Botswana</h5>
                    <p>Elefanten, Safari & Nationalparks</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" rel="noopener noreferrer" href="https://www.lonelyplanet.com/argentina">
                <img alt="Argentinien" src={Origami} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Argentinien</h5>
                    <p>Tango, Patagonien & Anden</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a target="_blank" rel="noopener noreferrer" href="https://www.lonelyplanet.com/jamaica">
                <img alt="Jamaika" src={Retrocam} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Jamaika</h5>
                    <p>Reggae, Strand & Wasserfälle</p>
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
