export default function Projects() {
    return (
        <main className="projects-page">
            <section className="hero section-padding">
                <div className="container">
                    <div className="section-header animate-slide-up" style={{ textAlign: 'left', margin: '0 0 4rem 0' }}>
                        <span style={{ color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Work</span>
                        <h1 className="fluid-h1" style={{ marginTop: '1rem' }}>RECENT PROJECTS</h1>
                    </div>

                    <div className="grid-2-col">
                        {/* Project 1 */}
                        <div className="project-card animate-slide-up" style={{ background: 'var(--muted)', borderRadius: 'var(--radius)', overflow: 'hidden', animationDelay: '0.1s' }}>
                            <div style={{ padding: '3rem' }}>
                                <span style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>E-commerce Platform</span>
                                <h2 style={{ fontSize: '1.75rem', marginTop: '0.5rem' }}>Bally Luxury Experience</h2>
                                <p style={{ color: 'var(--muted-foreground)', marginTop: '1rem' }}>A complete redesign focusing on high-end visuals and seamless checkout flows.</p>
                            </div>
                            <div style={{ padding: '0 3rem 3rem' }}>
                                <img src="/images/project_1.png" alt="Bally Website" style={{ width: '100%', borderRadius: '0.5rem', transition: 'transform 0.5s ease' }} className="project-img" />
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="project-card animate-slide-up" style={{ background: 'var(--muted)', borderRadius: 'var(--radius)', overflow: 'hidden', animationDelay: '0.2s' }}>
                            <div style={{ padding: '3rem' }}>
                                <span style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>Fintech Application</span>
                                <h2 style={{ fontSize: '1.75rem', marginTop: '0.5rem' }}>Crypto Wallet Interface</h2>
                                <p style={{ color: 'var(--muted-foreground)', marginTop: '1rem' }}>Designing for security and trust through clean typography and intuitive data visualization.</p>
                            </div>
                            <div style={{ padding: '0 3rem 3rem' }}>
                                <img src="/images/projects_2.png" alt="Crypto Wallet" style={{ width: '100%', borderRadius: '0.5rem' }} />
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="project-card animate-slide-up" style={{ background: 'var(--muted)', borderRadius: 'var(--radius)', overflow: 'hidden', animationDelay: '0.3s' }}>
                            <div style={{ padding: '3rem' }}>
                                <span style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>Healthcare Tech</span>
                                <h2 style={{ fontSize: '1.75rem', marginTop: '0.5rem' }}>Telemedicine Dashboard</h2>
                                <p style={{ color: 'var(--muted-foreground)', marginTop: '1rem' }}>Simplifying patient-doctor interactions with a focus on accessibility and rapid care.</p>
                            </div>
                            <div style={{ padding: '0 3rem 3rem' }}>
                                <img src="/images/projects_3.png" alt="Telemedicine" style={{ width: '100%', borderRadius: '0.5rem' }} />
                            </div>
                        </div>

                        {/* Project 4 */}
                        <div className="project-card animate-slide-up" style={{ background: 'var(--muted)', borderRadius: 'var(--radius)', overflow: 'hidden', animationDelay: '0.4s' }}>
                            <div style={{ padding: '3rem' }}>
                                <span style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>Educational Platform</span>
                                <h2 style={{ fontSize: '1.75rem', marginTop: '0.5rem' }}>E-learning Mobile App</h2>
                                <p style={{ color: 'var(--muted-foreground)', marginTop: '1rem' }}>Gamifying the learning process with interactive rewards and progress tracking.</p>
                            </div>
                            <div style={{ padding: '0 3rem 3rem' }}>
                                <img src="/images/projects_4.png" alt="E-learning App" style={{ width: '100%', borderRadius: '0.5rem' }} />
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                        <a href="#" className="btn-load-more">
                            Load more
                            <span className="load-more-icon">
                                <img src="/images/arrow.png" alt="" />
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="animate-slide-up section-padding" style={{ backgroundColor: 'var(--foreground)', color: 'white', animationDelay: '0.5s' }}>
                <div className="container">
                    <div className="grid-2-col" style={{ alignItems: 'center' }}>
                        <div>
                            <img src="/images/project_main.png" alt="Testimonial Author" style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }} />
                        </div>
                        <div>
                            <span style={{ color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase' }}>Testimonial</span>
                            <h2 className="fluid-h2" style={{ margin: '1rem 0 3rem' }}>WHAT THEY SAY</h2>
                            <blockquote style={{ fontSize: 'clamp(1.1rem, 3vw, 1.75rem)', fontStyle: 'italic', marginBottom: '3rem', color: 'rgba(255,255,255,0.8)', borderLeft: '4px solid var(--accent)', paddingLeft: '2rem' }}>
                                “Working with Sandesh was a game-changer for our brand. His ability to understand our vision and translate it into a stunning digital experience was truly impressive. The level of detail and craft is unmatched.”
                            </blockquote>
                            <div>
                                <strong style={{ fontSize: '1.25rem', display: 'block' }}>- Larry Diamond</strong>
                                <span style={{ color: 'rgba(255,255,255,0.6)' }}>Chief Executive Officer, Besnik</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Logos */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="client-logos">
                        <img src="/images/1.png" alt="Client 1" />
                        <img src="/images/2.png" alt="Client 2" />
                        <img src="/images/3.png" alt="Client 3" />
                        <img src="/images/4.png" alt="Client 4" />
                    </div>
                </div>
            </section>
        </main>
    )
}
