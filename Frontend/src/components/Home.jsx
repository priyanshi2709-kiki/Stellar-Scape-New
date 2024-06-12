import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import aboutus3 from '../assets/aboutus3.gif'
import aboutus2 from '../assets/aboutus2.gif'
import user from '../assets/user.png'
import useAppContext from '../AppContext';
import '../components/Home.css'
import docTren from '../assets/docTren.png'
import corpTren from '../assets/corpTren.png'
import signupbg from '../assets/signupbg.gif'
import logo from '../assets/logo.svg'
import hero from '../assets/hero.gif'
import arrowupright from '../assets/arrowupright.svg'
import reactLogo from '../assets/reactLogo.png'
import androidLogo from '../assets/androidLogo.png'
import kubernetesLogo from '../assets/kubernetesLogo.png'
import angularLogo from '../assets/angularLogo.png'
import cLogo from '../assets/cLogo.png'
import allLogo from '../assets/allLogo.png'
import corporateLogo from '../assets/corporateLogo.svg'
import docLogo from '../assets/docLogo.svg'
import exlogo from '../assets/exlogo.png'
import arrowright from '../assets/arrowright.svg'
import star from '../assets/star.svg'
import arrowvertical from '../assets/arrowvertical.svg'
import arrowhorizontal from '../assets/arrowhorizontal.svg'
import check from '../assets/check.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import HeroImage from '../assets/HeroImage.svg'
//import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
{/*import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';*/}

const Home = () => {

  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const isLoggedIn = sessionStorage.getItem('user');
  const [currentUser, setCurrentUser] = useState(null);
  const LoggedIn = sessionStorage.getItem('isloggedin');

  const { logout, loggedIn, setLoggedIn } = useAppContext();

  console.log(isLoggedIn);

  const { githubusername } = useParams();

  console.log(githubusername);

  const getGithubData = async () => {
    const res = await fetch(`http://localhost:3000/user/${githubusername}`);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      sessionStorage.setItem('user', JSON.stringify(data));
      setLoggedIn(true);
      setCurrentUser(data.displayName);
    }
  }

  useEffect(() => {
    if (githubusername)
      getGithubData();
  }, []);


  const showLoginOption = () => {

    if (isLoggedIn) {
      return (
        // <button type="submit" className='login-container' >
        // <div className="dropdown">
        //   <button className="dropbtn login-container" >{currentUser.}</button>
        //   <div className="dropdown-content">
        <button className="login-container btn" style={{ color: 'red' }} onClick={logout} >
          Logout
        </button>
        //   </div>
        // </div>
      )
    }
    else {
      return (
        <Link type="submit" to="/Login" className="btn btn-outline-dark" >Login

        </Link>
      )
    }
  }
  return (
    <>
      <header>
        <nav className="header__nav" style={{ marginBottom: '-35px', fontSize: '10px' }}>
          <div className="header__logo">

            <div className="header__logo-overlay " />
            <img src={logo} alt="logo" style={{ width: '20%', marginTop: '-35px', marginLeft: '-10px' }} />
            <Link to='/Admin/AdminDashboard'><h4 data-aos="fade-down" style={{ marginLeft: '-30px', color: 'white' }}>Source Hype</h4></Link>
          </div>
          <ul className="header__menu" data-aos="fade-down" >
            {user ? (
              <>
                <Link style={{fontSize:'20px'}} to="/Signup">Signup </Link>
                <Link style={{fontSize:'20px'}} to="/ProjectListing">Project</Link>
                <Link style={{fontSize:'20px'}} to="/Contact">Contact</Link>
                <Link style={{fontSize:'20px'}} to="/User/UserDashboard">Dashboard</Link>
                {/* <Link to="">User Profile</Link> */}
              </>
            ) : (
              <>
                <Link style={{fontSize:'20px'}} to="/">Home</Link>
                <Link style={{fontSize:'20px'}} to="Project">Project</Link>
                <Link style={{fontSize:'20px'}} to="ContactUs">Contact</Link>
              </>
            )}

            {LoggedIn ? (
              <>
                <Link style={{fontSize:'20px'}} type='button' onClick={logout} className="">
                  Admin Logout
                </Link>
                <Link style={{fontSize:'20px'}} to='/Admin/ManageProject'>Admin Dashboard</Link>
              </>
            ) : (
              <Link style={{fontSize:'20px'}} to="/AdminLogin" className="">
                Admin Login
              </Link>
            )}
          </ul>
          <ul className="header__menu-mobile" data-aos="fade-down">
            <li>
              <img src={hero} alt="hero" />
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-image">
          <img src={hero} alt="hero" data-aos="fade-up" style={{ width: '100%' }} />
          <div className="hero-image__overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-content-info" data-aos="fade-left" >
            <h1 style={{ fontWeight: '700', marginLeft: '32px' }}>Unlock real learning</h1>
            <p style={{ fontSize: '25px' }}>
              Work on Actual Projects with Source Hype's open source projects.
            </p>
            <div className="hero-content__buttons" style={{ marginLeft: '30%' }}>
              {/* <Link to="/login">
                <button className="hero-content__order-button">Login</button>
              </Link> */}
              {showLoginOption()}
            </div>
          </div>
          <div className="hero-content__testimonial" data-aos="fade-up">
            <div className="hero-content__customer flex-center">
              <h4>
                24<span>k+</span>
              </h4>
              <p>Hype Contributors</p>
            </div>
            <div className="hero-content__review">
              <img src={user} alt="user" />
              <p>
                "Innovative, efficient, collaborative: a project transforming possibilities."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us" id="about-us">
        <div className="about-us__image">
          <div className="about-us__image-sushi3">
            <img src={aboutus2} alt="collaboration" data-aos="fade-right" style={{ width: '100%', height: '80%' }} />
            {/*<img src={aboutus3} alt="technology" data-aos="fade-right" />*/}
          </div>
        </div>
        <div className="about-us__content" data-aos="fade-left">
          <p className="sushi__subtitle" style={{ fontSize: '30px', fontWeight: '400', marginTop: '-30px' }}>About Us </p>
          <h3 className="sushi__title" style={{ fontSize: '55px' }}>
            Our mission is to empower developers & enthusiasts.
          </h3>
          <p className="sushi__description">
            Source Hype is committed to the notion that open source not only provides great technology for developers, but also brings the best out in people.
          </p>

        </div>
      </section>
      <section className="popular-foods" id="projects">
        <h2 className="popular-foods__title" data-aos="flip-up" style={{ color: '#031879' }}>
          Popular Projects
        </h2>
        <div
          className="popular-foods__filters sushi__hide-scrollbar"
          data-aos="fade-up"
        >
          <Link to="/ProjectListing">
            <button className="popular-foods__filter-btn">
              <img src={allLogo} alt="all" />
              All
            </button>
          </Link>
          <button className="popular-foods__filter-btn">
            <img src={reactLogo} alt="react" />
            React
          </button>
          <button className="popular-foods__filter-btn">
            <img src={androidLogo} alt="android" />
            Android
          </button>
          <button className="popular-foods__filter-btn">
            <img src={kubernetesLogo} alt="kubernetes" />
            Kubernetes
          </button>
          <button className="popular-foods__filter-btn">
            <img src={angularLogo} alt="angular" />
            Angular
          </button>
          <button className="popular-foods__filter-btn">
            <img src={cLogo} alt="c" />
            C
          </button>
        </div>
        <div className="popular-foods__catalogue" data-aos="fade-up">
          <article className="popular-foods__card">
            <img
              className="popular-foods__card-image"
              src={corporateLogo}
              alt="corporate"
            />
            <h4 className="popular-foods__card-title">Corporate Hub</h4>
            <button className="popular-foods__filter-btn active">View Project</button>
            <div className="popular-foods__card-details flex-between">
              <div className="popular-foods__card-rating">
                <img src={star} alt="star" />
                <p>4.9</p>
              </div>
              <p className="popular-foods__card-price">12k+ </p>
            </div>
          </article>
          <article className="popular-foods__card active-card">
            <img
              className="popular-foods__card-image"
              src={docLogo}
              alt="doc"
            />
            <h4 className="popular-foods__card-title">Quick Doc Finder</h4>
            <div className="popular-foods__card-details flex-between">
              <div className="popular-foods__card-rating">
                <img src={star} alt="star" />
                <p>5.0</p>
              </div>
              <p className="popular-foods__card-price">21k+</p>
            </div>
          </article>
          <article className="popular-foods__card">
            <img
              className="popular-foods__card-image"
              src={exlogo}
              alt="exhibis"
            />
            <h4 className="popular-foods__card-title">Exhibis</h4>
            <button className="popular-foods__filter-btn active">View Project</button>
            <div className="popular-foods__card-details flex-between">
              <div className="popular-foods__card-rating">
                <img src={star} alt="star" />
                <p>4.7</p>
              </div>
              <p className="popular-foods__card-price">13k+</p>
            </div>
          </article>
        </div>
        <Link to='/ProjectListing'>
          <button className="popular-foods__button" style={{ marginLeft: '40%' }}>
            Explore Projects
            <img src={arrowright} alt="arrow-right" />
          </button>
        </Link>
      </section>
      <section className="trending" id="trending">
        <section className="trending-sushi">
          <div className="trending__content" data-aos="fade-right">
            <p className="sushi__subtitle">What’s Trending?</p>
            <h3 className="sushi__title">Quick-Doc Finder</h3>
            <p className="sushi__description">
              "Your Health, Simplified. Anytime, Anywhere."
            </p>
            <ul className="trending__list flex-between">
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Book a Doctor</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Choose your preferance</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Track doctor</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Quick service</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Easy payments</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Book a doctor</p>
              </li>
            </ul>
          </div>
          <div className="trending__image flex-center image-fluid">
            <img src={docTren} alt="doc" data-aos="fade-left" style={{ backgroundSize: 'cover', width: '100%' }} />
            <div className="trending__arrow trending__arrow-left">
              <img src={arrowvertical} alt="arrow vertical" />
            </div>
            <div className="trending__arrow trending__arrow-bottom">
              <img src={arrowhorizontal} style={{ marginTop: '10px' }} alt="arrow horizontal" />
            </div>
          </div>
        </section>
        <div className="trending__discover" data-aos="zoom-in">
          <Link to={'/ProjectListing'}><p>Discover</p></Link>
        </div>
        <section className="trending-drinks">
          <div className="trending__image flex-center">
            <img src={corpTren} alt="corporate" data-aos="fade-right" style={{ backgroundSize: 'cover' }} />
            <div className="trending__arrow trending__arrow-top">
              <img src={arrowhorizontal} style={{ marginTop: '-10px' }} alt="arrow horizontal" />
            </div>
            <div className="trending__arrow trending__arrow-right">
              <img src={arrowvertical} alt="arrow vertical" />
            </div>
          </div>
          <div className="trending__content" data-aos="fade-left" id='trending'>
            <p className="sushi__subtitle">What’s Trending?</p>
            <h3 className="sushi__title">Corporate Hub</h3>
            <p className="sushi__description">
              Corporate Hub Tagline
            </p>
            <ul className="trending__list flex-between">
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Pt 1</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Pt 2</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Pt 3</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Pt 3</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Pt 4</p>
              </li>
              <li>
                <div className="trending__icon flex-center">
                  <img src={check} alt="check" />
                </div>
                <p>Pt 4</p>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section className="subscription flex-center" id="services">
        <h2 data-aos="flip-down">
          Get updates straight <br />
          to your inbox
        </h2>
        <p data-aos="fade-up">Sign up for the Source Hype newsletter</p>
        <div className="subscription__form" data-aos="fade-up">
          <input type="text" placeholder="Enter your email address" />
          <button>Get Started</button>
        </div>
      </section>
      <footer className="footer flex-between">
        <h3 className="footer__logo">
          <span style={{ color: '#4D869C' }}>Source</span>
          <span></span>Hype
        </h3>
        <ul className="footer__nav">
          <li>
            <a href="#menu">Privacy Policy</a>
          </li>
          <li>
            <a href="#food">Cookies</a>
          </li>
          <li>
            <a href="#services">Terms of Use</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
        </ul>
        <ul className="footer__social">
          <li className="flex-center">
            <img src={facebook} alt="facebook" />
          </li>
          <li className="flex-center">
            <img src={instagram} alt="instagram" />
          </li>
          <li className="flex-center">
            <img src={twitter} alt="twitter" />
          </li>
        </ul>
      </footer>
    </>
  )
}


export default Home