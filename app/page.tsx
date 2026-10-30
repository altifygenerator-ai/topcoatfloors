"use client";

import { useEffect, useRef, useState } from "react";

const phone = "tel:+17133064605";
const projects = [
  { key: "red", image: "/assets/red-metallic.webp", name: "RED METALLIC", descriptor: "DECORATIVE EPOXY FINISH", description: "Red metallic epoxy finish", alt: "Deep red and gold metallic epoxy floor with a glossy finish" },
  { key: "silver", image: "/assets/silver-polished.webp", name: "SILVER FINISH", descriptor: "COMMERCIAL FLOOR SURFACE", description: "Glossy silver floor finish", alt: "Smooth reflective light gray floor in a commercial space" },
  { key: "charcoal", image: "/assets/charcoal-metallic.webp", name: "CHARCOAL METALLIC", descriptor: "CUSTOM DECORATIVE FINISH", description: "Charcoal metallic epoxy finish", alt: "Black and silver marbled epoxy floor" },
  { key: "green", image: "/assets/green-flake.webp", name: "BOLD COLOR", descriptor: "COATED FLOOR SURFACE", description: "Bright green coated floor", alt: "Bright green floor coating in an industrial interior" },
] as const;

type Project = (typeof projects)[number];
const finishes = [
  { name: "METALLIC EPOXY", description: "Custom patterns, movement and high-gloss finishes that can turn a garage, showroom or interior into something completely different." },
  { name: "FLAKE EPOXY", description: "A clean, decorative coating with color options and added texture. A practical option for areas that see everyday use." },
  { name: "POLISHED CONCRETE", description: "A smooth, low-maintenance look often chosen for commercial and industrial floors, as well as modern interior spaces." },
  { name: "CONCRETE COATINGS", description: "Finishes for concrete surfaces in residential, commercial and industrial settings. Tell us about the space and what you need from it." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (project && !dlg.open) dlg.showModal();
    if (!project && dlg.open) dlg.close();
  }, [project]);
  const closeProject = () => setProject(null);
  const nav = [ {href: "#work",label:"Our Work"}, {href:"#finishes",label:"Flooring Systems"}, {href:"#about",label:"About"}, {href:"#contact",label:"Contact"}];

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="utility-bar"><div className="shell utility-inner"><span>HOUSTON, TEXAS <span className="utility-dot" /> RESIDENTIAL &amp; COMMERCIAL FLOORING</span><a href={phone}>FREE QUOTES: (713) 306-4605 <span aria-hidden="true">↗</span></a></div></div>
    <header className="site-header" id="top"><div className="shell header-inner">
      <a className="brand" href="#top" aria-label="Top Coat Texas — Home"><span className="brand-name">TOP COAT <strong>TEXAS</strong><span className="brand-mark" aria-hidden="true" /></span><span className="brand-sub">EPOXY FLOORS &amp; CONCRETE COATINGS</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{nav.map(n => <a key={n.href} href={n.href}>{n.label}</a>)}</nav>
      <a className="nav-call" href={phone}>GET A FREE QUOTE <span aria-hidden="true">↗</span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-controls="mobile-menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}><span/><span/><span/></button>
    </div><nav className="mobile-nav" id="mobile-menu" aria-label="Mobile navigation" hidden={!menuOpen}>{nav.map(n => <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>{n.label}</a>)}<a href={phone} onClick={() => setMenuOpen(false)}>Call for a Free Quote</a></nav></header>

    <main id="main">
      <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><div className="hero-copy-inner"><p className="eyebrow">TOP COAT TEXAS · HOUSTON, TX</p><h1 id="hero-title">EPOXY FLOORS <span>THAT CHANGE</span> THE ROOM.</h1><p className="hero-lead">Metallic epoxy, flake systems and polished concrete for spaces that need to look good and work hard.</p><div className="hero-cta-row"><a className="solid-cta" href={phone}>GET A FREE QUOTE <span aria-hidden="true">↗</span></a><a className="text-cta" href="#work">SEE OUR WORK <span aria-hidden="true">↓</span></a></div><p className="hero-local">Residential <span/> Commercial <span/> Industrial</p></div></div>
      <div className="hero-visual" aria-label="Examples of Top Coat Texas flooring installations"><div className="hero-feature"><img src="/assets/charcoal-metallic.webp" alt="Glossy charcoal and silver metallic epoxy floor installed by Top Coat Texas" /><div className="photo-shadow" /></div><div className="hero-small"><img src="/assets/red-metallic.webp" alt="Bold red metallic epoxy floor in a garage" /></div><div className="hero-photo-caption"><span className="caption-line"/><span>REAL FLOORS. REAL PROJECTS.<small>PHOTOS: TOP COAT TEXAS</small></span></div></div></section>
      <div className="services-rail" aria-label="Flooring services"><div className="shell rail-inner"><span>METALLIC EPOXY</span><i aria-hidden="true"/><span>FLAKE EPOXY</span><i aria-hidden="true"/><span>POLISHED CONCRETE</span><i aria-hidden="true"/><span>CONCRETE COATINGS</span></div></div>
      <section className="work-section section-pad" id="work" aria-labelledby="work-title"><div className="shell"><div className="section-heading work-heading"><div><p className="eyebrow muted-eyebrow">OUR PROJECTS</p><h2 id="work-title">SEE WHAT&apos;S<br/>POSSIBLE.</h2></div><p>From dramatic metallic finishes to smooth, clean concrete surfaces. Every floor has its own look, and the finished work is the best way to show it.</p></div><div className="project-grid">{projects.map(p => <button key={p.key} className={"project-tile project-" + p.key} type="button" onClick={() => setProject(p)} aria-label={"Enlarge " + p.description.toLowerCase() + " photo"}><img src={p.image} alt={p.alt} loading="lazy"/><span className="project-label"><strong>{p.name}</strong><small>{p.descriptor}</small></span><span className="project-plus" aria-hidden="true">↗</span></button>)}</div><p className="work-note">A selection of actual Top Coat Texas project photos. Full-resolution images and additional projects can be added to the finished site.</p></div></section>
      <section className="finishes-section section-pad" id="finishes" aria-labelledby="finishes-title"><div className="shell finishes-layout"><div className="finishes-intro"><p className="eyebrow">FLOORING OPTIONS</p><h2 id="finishes-title">THE FINISH<br/>MAKES THE<br/><span>DIFFERENCE.</span></h2><p>Different spaces call for different surfaces. We&apos;ll help you choose a finish that fits how the space is used and how you want it to look.</p><a className="inline-contact" href={phone}>TALK THROUGH YOUR PROJECT <span aria-hidden="true">↗</span></a></div><div className="finish-list">{finishes.map(f => <div key={f.name} className="finish-item"><div className="finish-title-row"><h3>{f.name}</h3><span aria-hidden="true">↗</span></div><p>{f.description}</p></div>)}</div></div></section>
      <section className="about-section" id="about" aria-labelledby="about-title"><div className="about-image"><img src="/assets/silver-polished.webp" alt="Reflective finished concrete flooring in a large interior space" loading="lazy" /></div><div className="about-content"><p className="eyebrow muted-eyebrow">ABOUT TOP COAT TEXAS</p><h2 id="about-title">HOUSTON FLOORS. CUSTOM FINISHES.</h2><p>Top Coat Texas installs decorative epoxy floors and concrete finishes for homes, businesses and industrial spaces around Houston. Whether you want a bold metallic look or a simple, polished surface, the goal is a floor that fits your space.</p><p>The colors, patterns and finished project photos here give you a starting point. Let&apos;s talk about what you have in mind.</p><a className="simple-link" href={phone}>QUESTIONS? GIVE US A CALL <span aria-hidden="true">↗</span></a></div></section>
      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="shell contact-inner"><div><p className="eyebrow">LET&apos;S TALK ABOUT YOUR FLOOR</p><h2 id="contact-title">HAVE A PROJECT<br/>IN MIND?</h2><p>Tell us about the space, the finish you&apos;re considering and what you&apos;d like to change. We&apos;ll help you get started with a free quote.</p></div><div className="contact-action"><a className="contact-phone" href={phone}>(713) 306-4605 <span aria-hidden="true">↗</span></a><p>CALL FOR A FREE QUOTE</p><a className="secondary-contact" href="sms:+17133064605">OR SEND A TEXT <span aria-hidden="true">→</span></a></div></div></section>
    </main>
    <footer className="footer"><div className="shell footer-main"><div><a className="footer-brand" href="#top">TOP COAT TEXAS</a><p>Epoxy Floors &amp; Concrete Coatings<br/>Houston, Texas</p></div><div className="footer-links"><a href="#work">Projects</a><a href="#finishes">Flooring Systems</a><a href="#about">About</a><a href={phone}>(713) 306-4605</a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} TOP COAT TEXAS. ALL RIGHTS RESERVED.</span><span className="preview-disclaimer">HOMEPAGE DESIGN PREVIEW · FINAL LOGO, HIGH-RES PHOTOS &amp; QUOTE FORM TO BE ADDED.</span></div></footer>
    <dialog ref={dialogRef} className="lightbox" id="lightbox" aria-label="Flooring project image viewer" onClose={closeProject} onClick={e => {if (e.target === dialogRef.current) closeProject();}}><button type="button" className="lightbox-close" aria-label="Close image viewer" onClick={closeProject}>×</button>{project && <><img alt={project.alt} src={project.image}/><p>{project.description}</p></>}</dialog>
  </>;
}
