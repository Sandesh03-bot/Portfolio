export default function CV() {
    return (
        <main className="cv-page">
            <section className="hero section-padding">
                <div className="container">
                    <div className="section-header animate-slide-up" style={{ textAlign: 'left', margin: '0 0 4rem 0' }}>
                        <span className="accent-tag">Curriculum Vitae</span>
                        <h1 className="fluid-h1" style={{ marginTop: '1rem' }}>PROFESSIONAL SUMMARY</h1>
                    </div>

                    <div className="grid-2-col">
                        <div className="cv-main-content">
                            <div className="info-item animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                <h3 className="section-title">Experience</h3>
                                <div className="timeline">
                                    <div className="cv-timeline-item active animate-slide-up" style={{ animationDelay: '0.3s' }}>
                                        <h4>Lead UI/UX Designer</h4>
                                        <span className="period">Besnik Agency | 2021 - Present</span>
                                        <p>
                                            Leading the design team to create high-impact digital products. Focused on user-centric research and scalable design systems.
                                        </p>
                                    </div>
                                    <div className="cv-timeline-item animate-slide-up" style={{ animationDelay: '0.4s' }}>
                                        <h4>Senior UI Designer</h4>
                                        <span className="period">Freelance | 2019 - 2021</span>
                                        <p>
                                            Worked with over 50 global clients to deliver stunning visual identities and intuitive interfaces.
                                        </p>
                                    </div>
                                    <div className="cv-timeline-item animate-slide-up" style={{ animationDelay: '0.5s' }}>
                                        <h4>Junior Designer</h4>
                                        <span className="period">Creative Hub | 2017 - 2019</span>
                                        <p>
                                            Assisted in the creation of marketing materials and basic web layouts for local businesses.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="info-item animate-slide-up" style={{ animationDelay: '0.6s', marginTop: '4rem' }}>
                                <h3 className="section-title">Education</h3>
                                <div className="timeline">
                                    <div className="cv-timeline-item active animate-slide-up" style={{ animationDelay: '0.7s' }}>
                                        <h4>Bachelor of Fine Arts (BFA)</h4>
                                        <span className="period">Kathmandu University | 2013 - 2017</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cv-sidebar">
                            <div className="cv-card animate-float" style={{ animationDelay: '0.8s' }}>
                                <h3>Download Resume</h3>
                                <p style={{ marginBottom: '2.5rem' }}>
                                    Looking for a detailed offline version of my professional background? Get the PDF here.
                                </p>
                                <a
                                    href="/resume.pdf"
                                    download="Sandesh-Ghimire-Resume.pdf"
                                    className="cv-download-btn"
                                >
                                    Download CV (PDF)
                                </a>
                            </div>

                            <div className="animate-slide-up" style={{ marginTop: '3rem', animationDelay: '0.9s' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Skills</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                    {['Figma', 'Adobe XD', 'Sketch', 'React', 'Next.js', 'Tailwind', 'Photoshop', 'Illustrator', 'UX Research', 'Prototyping'].map(skill => (
                                        <span key={skill} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
