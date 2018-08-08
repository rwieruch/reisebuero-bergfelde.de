import React from 'react';
import { FaPlus, FaTag } from 'react-icons/lib/fa';

import Bali from '../assets/images/portfolio/bali.jpg';
import Marokko from '../assets/images/portfolio/morocco.jpg';
import Kanada from '../assets/images/portfolio/canada.jpg';
import Australia from '../assets/images/portfolio/australia.jpg';
import china from '../assets/images/portfolio/china.jpg';
import Botswana from '../assets/images/portfolio/botswana.jpg';
import Argentina from '../assets/images/portfolio/argentina.jpg';
import Jamaica from '../assets/images/portfolio/jamaica.jpg';

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
                <img alt="Bali" src={Bali} />
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.lonelyplanet.com/morocco"
              >
                <img alt="Marokko" src={Marokko} />
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.lonelyplanet.com/canada"
              >
                <img alt="Kanada" src={Kanada} />
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.lonelyplanet.com/australia"
              >
                <img alt="Australien" src={Australia} />
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.lonelyplanet.com/china"
              >
                <img alt="China" src={china} />
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.lonelyplanet.com/botswana"
              >
                <img alt="Botswana" src={Botswana} />
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.lonelyplanet.com/argentina"
              >
                <img alt="Argentinien" src={Argentina} />
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.lonelyplanet.com/jamaica"
              >
                <img alt="Jamaika" src={Jamaica} />
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
