import { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'SOS Disaster Management App',
    type: 'DISASTER MANAGEMENT APPLICATION',
    description: 'An application concept focused on making disaster alerts, emergency requests, and response information easier to access.',
    tags: ['Under progress'],
    githubUrl: undefined,
    artwork: 'northstar',
    symbol: '✳',
  },
  {
    number: '02',
    title: 'Spec to RTL Conversion Application',
    type: 'HARDWARE DESIGN APPLICATION',
    description: 'An application exploring the conversion of hardware specifications into RTL, bridging design requirements and implementation.',
    tags: [],
    githubUrl: 'https://github.com/Mirudhula-4227/spec-to-rtl-consistency-checker',
    artwork: 'fieldnotes',
    symbol: '↗',
  },
  {
    number: '03',
    title: 'VeriMed Application',
    type: 'HEALTHCARE APPLICATION',
    description: 'A healthcare application concept focused on making medical information and verification easier to access.',
    tags: [],
    githubUrl: 'https://github.com/Mirudhula-4227/MedflowAI',
    artwork: 'opensky',
    symbol: '◌',
  },
]

const skills = [
  ['Design', 'UI design', 'Prototyping', 'Design systems', 'Visual storytelling'],
  ['Development', 'HTML & CSS', 'JavaScript', 'React', 'TypeScript'],
  ['In the toolkit', 'Figma', 'Git & GitHub', 'Responsive design', 'Accessibility'],
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '↓'}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />
      <div className="starfield" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Portfolio, back to top">
          <span className="wordmark-icon">✳</span><span>mirudhula<span className="wordmark-dot">.</span></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? 'Close' : 'Menu'}</span><span className="menu-lines" aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>
        <nav id="site-nav" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <Arrow diagonal /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> AVAILABLE FOR OPPORTUNITIES</p>
            <h1 id="hero-title">Making the<br />digital feel <span className="serif-word">human.</span></h1>
            <p className="hero-intro">Hi, I’m <strong>Mirudhula</strong> — a designer and developer drawn to thoughtful details, clear ideas, and the occasional happy accident.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <Arrow /></a>
              <a className="text-link" href="#about">A little about me <Arrow diagonal /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative illustration of a glowing aurora above a mountain horizon" role="img">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="moon" />
            <div className="mountain mountain-back" /><div className="mountain mountain-front" />
          </div>
          <a href="#about" className="scroll-cue"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
          <div className="hero-index" aria-hidden="true">01 <span /> 04</div>
        </section>

        <section className="about section-wrap section-block" id="about" aria-labelledby="about-title">
          <div className="section-kicker"><span>01 / A BIT ABOUT ME</span><span className="kicker-rule" /></div>
          <div className="about-grid">
            <h2 id="about-title">Curious by nature.<br /><span className="muted-heading">Intentional by design.</span></h2>
            <div className="about-text">
              <p>I’m a creative technologist who loves bringing good ideas to life on the web. I work where thoughtful design meets front-end development — making things that feel considered, useful, and a little bit magical.</p>
              <p>When I’m away from my screen, you’ll probably find me collecting field notes, wandering outdoors, or following a question down a very interesting rabbit hole.</p>
              <a className="text-link" href="#contact">More about my approach <Arrow diagonal /></a>
            </div>
          </div>
          <div className="about-note"><span className="note-star">✳</span><span>Currently learning to slow down<br />and notice more.</span><span className="note-signature">— Mirudhula</span></div>
        </section>

        <section className="skills section-wrap section-block" id="skills" aria-labelledby="skills-title">
          <div className="section-kicker"><span>02 / THINGS I BRING</span><span className="kicker-rule" /></div>
          <div className="skills-heading"><h2 id="skills-title">A mix of <span className="serif-word">curiosity</span><br />& craft.</h2><p>Good work comes from being open to learning. Here are a few tools and practices I return to.</p></div>
          <div className="skill-groups">
            {skills.map(([category, ...items], index) => (
              <div className="skill-group" key={category}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{category}</h3>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="projects section-wrap section-block" id="projects" aria-labelledby="projects-title">
          <div className="section-kicker"><span>03 / SELECTED WORK</span><span className="kicker-rule" /></div>
          <div className="projects-heading"><div><h2 id="projects-title">Made with <span className="serif-word">intention.</span></h2><p>Selected academic and personal applications.</p></div><span className="project-count">( 03 )</span></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art art-${project.artwork}`} aria-hidden="true"><div className="art-grain" /><span className="art-symbol">{project.symbol}</span><span className="art-title">{project.title}</span><span className="art-caption-small">A STUDY IN {project.artwork === 'northstar' ? 'RHYTHM' : project.artwork === 'fieldnotes' ? 'OBSERVATION' : 'PERSPECTIVE'}</span></div>
                <div className="project-content">
                  <div className="project-meta"><span>{project.type}</span><span>{project.number} / 03</span></div>
                  <h3>{project.title}{project.githubUrl && <span className="project-arrow" aria-hidden="true">↗</span>}</h3>
                  <p>{project.description}</p>
                  {project.tags.length > 0 && <ul className="tag-list" aria-label="Project status">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
                  {project.githubUrl && <a className="project-repo-link" href={project.githubUrl} target="_blank" rel="noreferrer">View GitHub repository <Arrow diagonal /></a>}
                </div>
              </article>
            ))}
          </div>
          <p className="placeholder-note">Project technology details will be added as each application is finalized.</p>
        </section>

        <section className="contact section-wrap section-block" id="contact" aria-labelledby="contact-title">
          <div className="section-kicker"><span>04 / YOUR TURN</span><span className="kicker-rule" /></div>
          <div className="contact-panel">
            <div className="contact-orb" aria-hidden="true"><span>✳</span></div>
            <p className="eyebrow">HAVE A GOOD ONE IN MIND?</p>
            <h2 id="contact-title">Let’s make<br /><span className="serif-word">something matter.</span></h2>
            <p className="contact-copy">I’m always happy to talk about thoughtful projects, creative collaborations, or what you’re learning lately.</p>
            <a className="button button-primary contact-button" href="mailto:mirudhulabm@gmail.com">Email me <Arrow diagonal /></a>
            <a className="contact-email" href="mailto:mirudhulabm@gmail.com">mirudhulabm@gmail.com</a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="wordmark footer-mark" href="#home"><span className="wordmark-icon">✳</span><span>mirudhula<span className="wordmark-dot">.</span></span></a>
        <a className="back-top" href="#home">BACK TO TOP <span aria-hidden="true">↑</span></a>
      </footer>
    </div>
  )
}

export default App
