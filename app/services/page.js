export default function Services() {
    return (
        <main className="services-page">
            <section className="hero section-padding">
                <div className="container">
                    <div className="section-header animate-slide-up" style={{ textAlign: 'left', margin: '0 0 5rem 0' }}>
                        <span style={{ color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Services</span>
                        <h1 className="fluid-h1" style={{ marginTop: '1rem' }}>MY SPECIALTIES</h1>
                    </div>

                    <div className="grid-responsive" style={{ gap: '0' }}>
                        {/* Specialty 1 */}
                        <div className="animate-slide-up" style={{ borderBottom: '1px solid var(--border)', padding: '3rem 0', animationDelay: '0.1s' }}>
                            <div className="grid-2-col" style={{ gap: '2rem' }}>
                                <div>
                                    <h2 className="fluid-h2" style={{ marginBottom: '1rem' }}>WEB DESIGN</h2>
                                    <p style={{ color: 'var(--muted-foreground)' }}>Creating responsive, high-performance websites with a focus on speed, accessibility, and modern aesthetics. I bring your digital vision to life through code and creativity.</p>
                                </div>
                                <div style={{ fontSize: '2rem', color: 'var(--muted-foreground)', textAlign: 'right' }}>+</div>
                            </div>
                        </div>

                        {/* Specialty 2 */}
                        <div className="animate-slide-up" style={{ borderBottom: '1px solid var(--border)', padding: '3rem 0', animationDelay: '0.2s' }}>
                            <div className="grid-2-col" style={{ gap: '2rem' }}>
                                <div>
                                    <h2 className="fluid-h2" style={{ marginBottom: '1rem' }}>UI/UX DESIGN</h2>
                                    <p style={{ color: 'var(--muted-foreground)' }}>User-centric design solutions that bridge the gap between user needs and business goals. I specialize in wireframing, prototyping, and creating intuitive user journeys.</p>
                                </div>
                                <div style={{ fontSize: '2rem', color: 'var(--muted-foreground)', textAlign: 'right' }}>+</div>
                            </div>
                        </div>

                        {/* Specialty 3 - Active State */}
                        <div className="animate-slide-up" style={{ borderBottom: '1px solid var(--border)', padding: '3rem 0', animationDelay: '0.3s' }}>
                            <div className="grid-2-col" style={{ gap: '4rem' }}>
                                <div>
                                    <h2 className="fluid-h2" style={{ marginBottom: '2rem', color: 'var(--accent)' }}>MOBILE APPLICATION</h2>
                                    <p style={{ color: 'var(--muted-foreground)', fontSize: '1.2rem', lineHeight: '1.8' }}>
                                        Crafting seamless mobile experiences for iOS and Android. My focus is on native-feeling interactions, clear navigation, and engaging micro-animations that keep users coming back.
                                    </p>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                    <div style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: '2rem' }}>−</div>
                                    <img src="/images/services.png" alt="Mobile Application" style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                                </div>
                            </div>
                        </div>

                        {/* Specialty 4 */}
                        <div className="animate-slide-up" style={{ borderBottom: '1px solid var(--border)', padding: '3rem 0', animationDelay: '0.4s' }}>
                            <div className="grid-2-col" style={{ gap: '2rem' }}>
                                <div>
                                    <h2 className="fluid-h2" style={{ marginBottom: '1rem' }}>USER RESEARCH</h2>
                                    <p style={{ color: 'var(--muted-foreground)' }}>Data-driven insights to inform your design decisions. I conduct usability testing, user interviews, and competitive analysis to ensure your product resonates with your audience.</p>
                                </div>
                                <div style={{ fontSize: '2rem', color: 'var(--muted-foreground)', textAlign: 'right' }}>+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
