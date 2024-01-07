import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bihar Job Connect</title>
        <meta property="og:title" content="Bihar Job Connect" />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-container1">
            <nav className="home-links">
              <Link to="/" className="home-nav1">
                About
              </Link>
            </nav>
          </div>
          <div className="home-container2">
            <div data-thq="thq-navbar-nav" className="home-desktop-menu"></div>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu"></div>
          <Link to="/apply-to-job" className="home-nav2">
            Careers
          </Link>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container3">
            <h1 className="home-hero-heading heading1">
              <span>
                Welcome to
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Bihar Job Connect</span>
            </h1>
            <span className="home-hero-sub-heading">
              Transforming data into insights
            </span>
            <div className="home-btn-group"></div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container4">
            <span className="home-text03 sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">Who We Are</h2>
            <span className="home-details-sub-heading">
              We are a leading survey firm dedicated to helping businesses make
              informed decisions through data collection and analysis. With our
              expertise and advanced technology, we provide actionable insights
              that drive growth and success.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1521669246297-b04a27e36f07?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwNDU0NjE5OHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container5">
              <span className="home-text06 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Unlock the Power of Surveys
              </h2>
              <span className="home-features-sub-heading">
                Discover the key features that make our survey firm stand out
                from the rest.
              </span>
            </div>
            <div className="home-container6">
              <FeatureCard
                Heading="Survey Creation"
                SubHeading="Easily create and customize surveys to gather valuable data from your target audience."
              ></FeatureCard>
              <FeatureCard
                Heading="Data Analysis"
                SubHeading="Effortlessly analyze survey results with powerful data visualization tools and generate insightful reports."
              ></FeatureCard>
              <FeatureCard
                Heading="Survey Distribution"
                SubHeading="Reach your desired respondents through various distribution channels like email, social media, and website embedding."
              ></FeatureCard>
              <FeatureCard
                Heading="Real-time Reporting"
                SubHeading="Access real-time survey responses and monitor data trends instantly for quick decision-making."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container7">
            <span className="home-logo">Bihar Job Connect</span>
            <nav className="home-nav">
              <span className="home-nav11">About</span>
              <Link to="/apply-to-job" className="home-nav21">
                Careers
              </Link>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container8">
            <span className="home-text09">
              © 2024 Bihar Job Connect, All Rights Reserved.
            </span>
            <div className="home-icon-group"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
