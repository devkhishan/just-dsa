import React, { useState, useEffect, useRef } from 'react';
import { syllabusData } from '../data/syllabus';
import thumbnail from '../assets/thumbnail.png';
import leetcodeImg from '../assets/leetcode.png';
import warrenBuffettImg from '../assets/warren_buffett.png';

const PLAYLIST_VIDEOS = [
  { id: "LsysIngM-jw", title: "Video 1" },
  { id: "22HS3NeatBc", title: "Video 2" },
  { id: "cpvrvYj2GzE", title: "Video 3" },
  { id: "4BwkBxtbV24", title: "Video 4" },
  { id: "LdvXa5fMG6E", title: "Video 5" },
];

export const LandingPage = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isQuoteHovered, setIsQuoteHovered] = useState(false);
  const [isDetailsRevealed, setIsDetailsRevealed] = useState(false);
  const activePhaseData = syllabusData[activePhaseIndex];

  return (
    <main className="container">

      {/* SECTION 1: HERO */}
      <section className="section-header">
        <h1 className="course-title">Just <span className="text-accent">DSA</span>.</h1>
        <p className="text-body">
          A minimalist approach to learning Data Structures and Algorithms.
          No distractions. Just pure problem-driven learning over 8 weeks.
        </p>

        <div className="hero-socials">
          <a href="https://www.youtube.com/@ventacode" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube
          </a>
          <a href="https://linkedin.com/in/devkhishan" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/devkhishan/" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={leetcodeImg} alt="LeetCode" className="social-icon-img" />
            LeetCode
          </a>
        </div>
      </section>

      {/* SECTION 1.5: VIDEO */}
      <section className="video-section">
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${PLAYLIST_VIDEOS[currentVideoIndex].id}?vq=hd1080`}
            title={PLAYLIST_VIDEOS[currentVideoIndex].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-btn"
            onClick={() => setCurrentVideoIndex(Math.max(0, currentVideoIndex - 1))}
            disabled={currentVideoIndex === 0}
          >
            Previous
          </button>
          <span className="carousel-indicator">
            Video {currentVideoIndex + 1} of {PLAYLIST_VIDEOS.length}
          </span>
          <button
            className="carousel-btn"
            onClick={() => setCurrentVideoIndex(Math.min(PLAYLIST_VIDEOS.length - 1, currentVideoIndex + 1))}
            disabled={currentVideoIndex === PLAYLIST_VIDEOS.length - 1}
          >
            Next
          </button>
        </div>
      </section>

      {/* SECTION 2: SYLLABUS */}
      <section>
        <h2 className="section-title">The Curriculum</h2>

        {/* Filter Pills */}
        <div className="phase-filters">
          <div
            className="active-bg"
            style={{ transform: `translateX(${activePhaseIndex * 100}%)` }}
          />
          {syllabusData.map((phase, index) => (
            <button
              key={index}
              className={`phase-btn ${index === activePhaseIndex ? 'active' : ''}`}
              onClick={() => setActivePhaseIndex(index)}
            >
              {phase.phase}
            </button>
          ))}
        </div>

        {/* Selected Phase Syllabus */}
        <div className="syllabus-content" key={activePhaseIndex}>
          <h3 className="phase-title">{activePhaseData.title}</h3>

          {activePhaseIndex === 0 ? (
            <ul className="syllabus-list">
              {activePhaseData.topics.map((heading, index) => (
                <li key={index} className="syllabus-item" style={{ animationDelay: `${index * 0.05}s` }}>
                  <span className="syllabus-item-number">{index + 1}</span>
                  {heading}
                </li>
              ))}
            </ul>
          ) : (
            <div className="locked-phase">
              <svg viewBox="0 0 24 24" fill="currentColor" className="lock-icon">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              </svg>
              <p>Topics Coming Soon</p>
              <span className="locked-subtext">The topics for this phase will be revealed at the end of Phase 1.</span>
            </div>
          )}
        </div>
      </section>

      {/* TWEET QUOTE SECTION - HOVER POP-OUT */}
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        {/* Dim Overlay - Fades in/out on hover */}
        <div
          className="dim-overlay"
          style={{ opacity: isQuoteHovered ? 0.85 : 0 }}
        />

        <div
          className="twitter-quote"
          onMouseEnter={() => setIsQuoteHovered(true)}
          onMouseLeave={() => setIsQuoteHovered(false)}
        >
          <div className="tweet-header">
            <div className="tweet-avatar">
              <img src={warrenBuffettImg} alt="Warren Buffett" className="tweet-avatar-img" />
            </div>
            <div className="tweet-author-info">
              <span className="tweet-name">Warren Buffett</span>
              <span className="tweet-handle">@WarrenBuffett</span>
            </div>
          </div>
          <p className="tweet-text">"The best investment you can make is in yourself."</p>
        </div>
      </section>

      {/* SECTION 3: PRICING & REVEAL DETAILS */}
      <section>
        <h2 className="section-title">Investment</h2>
        <p className="text-body">
          Join the comprehensive 8-week program designed for absolute clarity.
          The price below grants you complete access to <strong>Phase 1: DSA Fundamentals</strong>.
          <br />
          <span style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', marginTop: '0.5rem', display: 'inline-block' }}>
            (Click the price below to reveal Course Details)
          </span>
        </p>
        <div
          className="pricing-display"
          onClick={() => setIsDetailsRevealed(!isDetailsRevealed)}
          title="Click to reveal Course Details"
        >
          <span className="currency">₹</span>
          <span className="price">4,999</span>
        </div>

        {/* COURSE DETAILS TABLE SECTION (Revealed on click) */}
        <div className={`details-reveal-wrapper ${isDetailsRevealed ? 'revealed' : ''}`}>
          <div style={{ paddingTop: '1rem' }}>
            <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Course Details</h2>
            <div className="table-container">
              <table className="details-table">
                <tbody>
                  <tr>
                    <td><strong>Duration</strong></td>
                    <td>2 Months (40 Classes total)</td>
                  </tr>
                  <tr>
                    <td><strong>Schedule</strong></td>
                    <td>1 hour per day (8 P.M. - 9 P.M. IST)</td>
                  </tr>
                  <tr>
                    <td><strong>Holidays</strong></td>
                    <td>No classes on weekends or Government holidays</td>
                  </tr>
                  <tr>
                    <td><strong>Access</strong></td>
                    <td>Every class is recorded and provided with lifetime access</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT & SOCIALS */}
      <section>
        <h2 className="section-title">Ready to Start?</h2>
        <p className="text-body">Reach out to secure your spot today.</p>

        <a
          href="https://wa.me/918925124359"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          Text me on WhatsApp
        </a>

        <div className="socials">
          <p className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <a href="mailto:devkhishan14@icloud.com">devkhishan14@icloud.com</a>
          </p>
        </div>
      </section>

    </main>
  );
};
