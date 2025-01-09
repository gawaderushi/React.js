// Single Page React Application with 10 Components

import React from 'react';
import './App.css';
import './Components/Navbar'

function Header() {
  return (
    <header className="header">
      <h1>Welcome to My React Single Page</h1>
    </header>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>We are a team dedicated to building amazing web experiences.</p>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <ul>
        <li>Web Development</li>
        <li>UI/UX Design</li>
        <li>SEO Optimization</li>
      </ul>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <p>Check out some of our projects.</p>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <blockquote>"Amazing service and great support!"</blockquote>
    </section>
  );
}

function Team() {
  return (
    <section className="team">
      <h2>Meet Our Team</h2>
      <p>We have a team of skilled professionals.</p>
    </section>
  );
}

function FAQ() {
  return (
    <section className="faq">
      <h2>FAQ</h2>
      <p>Have questions? We've got answers.</p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />

        <label>Email:</label>
        <input type="email" name="email" />

        <label>Message:</label>
        <textarea name="message"></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 My React Single Page. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
