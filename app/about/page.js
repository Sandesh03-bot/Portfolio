export default function About() {
    return (
        <main className="about-page">
            <section className="hero section-padding">
                <div className="container">
                    <div className="grid-2-col animate-slide-up">
                        <div className="hero-left">
                            <div className="section-header" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
                                <h1 className="fluid-h1">About me</h1>
                            </div>
                            <p className="fluid-p" style={{ color: 'var(--muted-foreground)', marginBottom: '2rem' }}>
                                I am a multi-disciplinary designer based in Kathmandu, Nepal. With over a decade of experience in the digital space, I've developed a deep passion for creating products that balance aesthetic beauty with functional simplicity.
                                <br /><br />
                                My journey started with a fascination for how people interact with technology. Today, I work with global brands and startups to transform complex problems into elegant, user-centric solutions. I believe that great design is not just about how it looks, but about the seamless experience it provides to every user.
                            </p>
                            <a href="/cv" className="btn-premium animate-fade-in animate-float" style={{ animationDelay: '0.4s' }}>
                                View My CV
                                <img src="/images/right_arrow_black.png" alt="" style={{ width: '1rem', height: '1rem', filter: 'brightness(0) invert(1)' }} />
                            </a>
                        </div>
                        <div className="hero-image animate-scale-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', animationDelay: '0.2s' }}>
                            <div className="image-wrapper" style={{ width: 'clamp(15rem, 40vw, 22rem)', height: 'clamp(15rem, 40vw, 22rem)', borderRadius: '50%', backgroundColor: '#fcd34d', overflow: 'hidden' }}>
                                <img src="/images/mero-photo_black&white.png" alt="Sandesh Ghimire" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stats animate-slide-up" style={{ backgroundColor: 'var(--muted)', padding: '6rem 0', animationDelay: '0.5s' }}>
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item reveal" style={{ textAlign: 'center', transitionDelay: '0.1s' }}>
                            <div className="stat-number" style={{ justifyContent: 'center' }}>19+ <img src="/images/layer.png" alt="" /></div>
                            <div className="stat-label">Years of Experience</div>
                        </div>
                        <div className="stat-item reveal" style={{ textAlign: 'center', transitionDelay: '0.2s' }}>
                            <div className="stat-number" style={{ justifyContent: 'center' }}>500+ <img src="/images/briefcase.png" alt="" /></div>
                            <div className="stat-label">Completed Projects</div>
                        </div>
                        <div className="stat-item reveal" style={{ textAlign: 'center', transitionDelay: '0.3s' }}>
                            <div className="stat-number" style={{ justifyContent: 'center' }}>20+ <img src="/images/medal.png" alt="" /></div>
                            <div className="stat-label">Hackathons</div>
                        </div>
                        <div className="stat-item reveal" style={{ textAlign: 'center', transitionDelay: '0.4s' }}>
                            <div className="stat-number" style={{ justifyContent: 'center' }}>400+ <img src="/images/smile.png" alt="" /></div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
