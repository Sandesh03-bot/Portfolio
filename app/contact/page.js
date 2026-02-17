export default function Contact() {
    return (
        <main className="contact-page">
            <section className="hero">
                <div className="container">
                    <div className="contact-grid animate-slide-up">
                        {/* Left Column: Details */}
                        <div className="contact-info">
                            <div>
                                <span className="section-subtitle" style={{ color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</span>
                                <h1>LET'S COLLABORATE</h1>
                            </div>

                            <div className="contact-details">
                                <p className="contact-detail-text">
                                    Kathmandu, Nepal <br />
                                    Available for worldwide collaboration.
                                </p>

                                <div className="contact-methods">
                                    <h2>+977 9847512467</h2>
                                    <h2 style={{ color: 'var(--accent)' }}>contact@gmail.com</h2>
                                </div>

                                <div className="contact-social-links">
                                    <a href="#">FACEBOOK</a>
                                    <a href="#">TWITTER</a>
                                    <a href="#">INSTAGRAM</a>
                                    <a href="#">LINKEDIN</a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="contact-form-card animate-float" style={{ animationDelay: '0.2s' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>ANY PROJECT?</h2>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                                    <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>NAME</label>
                                        <input type="text" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'white' }} required />
                                    </div>
                                    <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>EMAIL</label>
                                        <input type="email" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'white' }} required />
                                    </div>
                                </div>

                                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>MESSAGE</label>
                                    <textarea rows={4} style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border)', resize: 'none', background: 'white' }}></textarea>
                                </div>

                                <div className="attach-file-link">
                                    <img src="/images/paperclip.png" alt="Attach" />
                                    <span>ATTACH FILE</span>
                                </div>

                                <button type="submit" className="btn-premium" style={{ border: 'none', width: 'fit-content' }}>
                                    Submit now
                                    <img src="/images/right_arrow_black.png" alt="" style={{ width: '1rem', height: '1rem', filter: 'brightness(0) invert(1)' }} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
