import React, { Component } from 'react';

const NAVBAR_HEIGHT = 48;
const LANDING_HEIGHT = 800;

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLanding: true,
    };

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }

  onScroll(event) {
    if (window.scrollY + NAVBAR_HEIGHT < LANDING_HEIGHT) {
      this.setState(() => ({ isLanding: true }));
    } else {
      this.setState(() => ({ isLanding: false }));
    }
  }

  render() {
    const { isLanding } = this.state;
    const className = isLanding ? 'landing' : 'not-landing';

    return (
      <nav id="nav-wrap" className={className}>
        <a className="mobile-btn" href="#nav-wrap" />
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#start">
              Start
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Urlaubsziele
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              Über Uns
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
