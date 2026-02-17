import Image from 'next/image'

export default function Home() {
    return (
        <div className="portfolio-content">
            <main>
                {/* Hero Section */}
                <section id="home" className="hero section-padding">
                    <div className="container">
                        <div className="hero-header animate-slide-up">
                            <h1 className="fluid-h1">Hey, It's Sandesh<br />UI/UX Designer</h1>
                            <a href="#about" className="scroll-down animate-fade-in" style={{ animationDelay: '0.4s' }}>
                                <span>Scroll Down</span>
                                <img src="/images/down_arrow.png" alt="Scroll" />
                            </a>
                        </div>

                        <div className="grid-3-col animate-slide-up" style={{ animationDelay: '0.2s', alignItems: 'center' }}>
                            {/* Left Column */}
                            <div className="hero-left text-center-mobile">
                                <div className="info-item">
                                    <h3>Biography</h3>
                                    <p>I am a passionate designer dedicated to creating intuitive and beautiful digital experiences. Based in Kathmandu, I bridge the gap between user needs and technical requirements.</p>
                                </div>
                                <div className="info-item">
                                    <h3>My Services</h3>
                                    <ul>
                                        <li>User Experience Design</li>
                                        <li>User Interface Design</li>
                                        <li>Usability Design</li>
                                    </ul>
                                </div>
                                <div className="info-item">
                                    <h3>My Location</h3>
                                    <p>Kathmandu, Nepal</p>
                                </div>
                            </div>

                            {/* Center Image */}
                            <div className="hero-image" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="image-wrapper">
                                    <img src="/images/profile.png" alt="Sandesh Ghimire" />
                                </div>
                            </div>

                            {/* Right Column (Stats) */}
                            <div className="hero-right text-center-mobile">
                                <div className="stat-item animate-slide-up" style={{ animationDelay: '0.3s' }}>
                                    <div className="stat-number">
                                        19+ <img src="/images/layer.png" alt="" />
                                    </div>
                                    <div className="stat-label">Years of Experience</div>
                                </div>
                                <div className="stat-item animate-slide-up" style={{ animationDelay: '0.4s' }}>
                                    <div className="stat-number">
                                        500+ <img src="/images/briefcase.png" alt="" />
                                    </div>
                                    <div className="stat-label">Completed Projects</div>
                                </div>
                                <div className="stat-item animate-slide-up" style={{ animationDelay: '0.5s' }}>
                                    <div className="stat-number">
                                        400+ <img src="/images/smile.png" alt="" />
                                    </div>
                                    <div className="stat-label">Happy Clients</div>
                                </div>
                                <div className="stat-item animate-slide-up" style={{ animationDelay: '0.6s' }}>
                                    <div className="stat-number">
                                        20+ <img src="/images/medal.png" alt="" />
                                    </div>
                                    <div className="stat-label">Hackathons</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clients Section */}
                <section id="about" className="clients reveal">
                    <div className="container">
                        <div className="section-header">
                            <h2>Global Collaboration</h2>
                            <p>I've had the pleasure of working with some of the most innovative companies in the tech industry, helping them refine their digital presence and user journeys.</p>
                        </div>
                        <div className="client-logos">
                            <img src="/images/discord.png" alt="Discord" />
                            <img src="/images/tumblr.png" alt="Tumblr" />
                            <img src="/images/medium.png" alt="Medium" />
                            <img src="/images/linkedin.png" alt="LinkedIn" />
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="services reveal section-padding">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="fluid-h2">My Expertise</h2>
                            <p>I specialize in crafting digital products that are not only visually stunning but also highly functional and user-centric.</p>
                        </div>
                        <div className="grid-3-col">
                            <div className="service-card reveal" style={{ transitionDelay: '0.1s' }}>
                                <img src="/images/page.png" alt="Product Design" />
                                <h3>Product Design</h3>
                                <p>From initial concept to final prototype, I create comprehensive product solutions that solve real-world problems and delight users.</p>
                                <a href="/services" className="read-more">EXPLORE MORE <img src="/images/right_arrow_black.png" alt="" /></a>
                            </div>
                            <div className="service-card reveal" style={{ transitionDelay: '0.2s' }}>
                                <img src="/images/chat.png" alt="UX Design" />
                                <h3>UX Design</h3>
                                <p>I focus on understanding user behavior, creating intuitive information architectures, and designing seamless flows that enhance usability.</p>
                                <a href="/services" className="read-more">EXPLORE MORE <img src="/images/right_arrow_black.png" alt="" /></a>
                            </div>
                            <div className="service-card reveal" style={{ transitionDelay: '0.3s' }}>
                                <img src="/images/computer.png" alt="UI Design" />
                                <h3>UI Design</h3>
                                <p>I transform ideas into beautiful, pixel-perfect interfaces that reflect your brand's identity and provide an engaging visual experience.</p>
                                <a href="/services" className="read-more">EXPLORE MORE <img src="/images/right_arrow_black.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
