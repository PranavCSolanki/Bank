import React from 'react';
import 'aos/dist/aos.css';
import Personalloan from '../images/Personal_loan.png';
import Homeloan from '../images/Home_loan.png';
import Vehicleloan from '../images/vehicle_loan.png'
import Educational from '../images/Educational_loan.png'
import '../styles/services.scss';
import { Link } from 'react-router-dom';


const servicesData = [
  {
    image: Personalloan,
    title: 'Personal Loan',
    desc: 'Apply for Better life',
    link: '/personalinfo',
    btn: 'Get Started',
  },
  {
    image: Homeloan,
    title: 'Home Loan',
    desc: 'Happy Home',
    link: '/personalinfo',
    btn: 'Get Started',
  },
  
  {
    image: Vehicleloan,
    title: 'Vehicle Loan',
    desc: 'Enjoy your Life',
    link: '/personalinfo',
    btn: 'Get Started',
  },
  {
    image: Educational,
    title: 'Education Loan',
    desc: 'Good Career',
    link: '/personalinfo',
    btn: 'Get Started',
  },
];

const Services = () => {
  return (
    <div className="services_cls section_padding">

      <h1 className="main-title heading">Services
      </h1>
      <h3>SBI Bank's Loans can perform following operation.</h3>
      <div className="services-box">


        {servicesData.map((service, index) =>
        (
          <div key={index} data-aos="zoom-in-right" data-aos-delay="0" className="card">

            <img src={service.image} alt={`${service.title} img`} />

            <div className="service-name">{service.title}</div>
            <div className="service-desc">{service.desc}</div>

          <Link to={service.link}>
              <button>{service.btn}</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
