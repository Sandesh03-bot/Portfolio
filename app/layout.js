import './globals.css'

export const metadata = {
    title: 'Sandesh Ghimire - UI/UX Designer Portfolio',
    description: 'Creative UI/UX Designer based in Kathmandu, Nepal.',
}

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased" suppressHydrationWarning>
                <header className="navbar animate-fade-in">
                    <div className="container navbar-container">
                        <div className="logo">Sandesh Ghimire</div>
                        <nav className="nav-links" id="navLinks">
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/projects">Projects</a>
                            <a href="/services">Services</a>
                            <a href="/blog">Blog</a>
                            <a href="/cv">CV</a>
                            <a href="/contact">Contact</a>
                        </nav>
                        <div className="social-icons" style={{ display: 'none' /* Hidden on mobile to save space, shown via CSS on desktop */ }}>
                            {/* ... icons ... */}
                        </div>
                        <button className="nav-toggle" id="navToggle" aria-label="Toggle menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </header>
                {children}
                <footer id="contact" className="site-footer">
                    <div className="container">
                        <div className="footer-grid reveal">
                            <div className="footer-col-brand">
                                <div className="footer-logo">Sandesh Ghimire</div>
                                <p className="footer-tagline">Building digital experiences that matter.</p>
                                <div className="social-icons footer-social-fixed">
                                    <a href="https://facebook.com" aria-label="Facebook">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z" /></svg>
                                    </a>
                                    <a href="https://instagram.com" aria-label="Instagram">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    </a>
                                    <a href="https://linkedin.com" aria-label="LinkedIn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>
                                    <a href="https://github.com" aria-label="GitHub">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </div>
                            </div>

                            <div className="footer-col">
                                <h3>Quick Links</h3>
                                <nav className="footer-links">
                                    <a href="/">Home</a>
                                    <a href="/about">About</a>
                                    <a href="/projects">Work</a>
                                    <a href="/services">Services</a>
                                </nav>
                            </div>

                            <div className="footer-col">
                                <h3>Specialties</h3>
                                <nav className="footer-links">
                                    <a href="/services">UI/UX Design</a>
                                    <a href="/services">Web Design</a>
                                    <a href="/services">App Design</a>
                                    <a href="/services">User Research</a>
                                </nav>
                            </div>

                            <div className="footer-col">
                                <h3>Say Hello</h3>
                                <div className="footer-contact-info">
                                    <p>Email: <a href="mailto:contact@sandesh.com">contact@sandesh.com</a></p>
                                    <p>WhatsApp: <a href="tel:+9779847512467">+977 9847512467</a></p>
                                    <p>Location: Kathmandu, Nepal</p>
                                </div>
                                <a href="mailto:contact@sandesh.com" className="btn-footer-cta">
                                    Let's Collaborate <img src="/images/right_arrow_black.png" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <p>&copy; 2025 Sandesh Ghimire. Crafted with passion.</p>
                            <div className="footer-legal">
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms & Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>

                <button
                    id="scrollTop"
                    className="scroll-top-btn"
                    aria-label="Scroll to top"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 15l-6-6-6 6" />
                    </svg>
                </button>

                {/* Scroll Reveal & Scroll Top Script */}
                <script dangerouslySetInnerHTML={{
                    __html: `
                        const observerOptions = {
                            threshold: 0.1,
                            rootMargin: '0px 0px -50px 0px'
                        };

                        const observer = new IntersectionObserver((entries) => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    entry.target.classList.add('active');
                                }
                            });
                        }, observerOptions);

                        document.addEventListener('DOMContentLoaded', () => {
                            const revealElements = document.querySelectorAll('.reveal');
                            revealElements.forEach(el => observer.observe(el));

                            // Scroll Top Visibility
                            const scrollBtn = document.getElementById('scrollTop');
                            
                            window.addEventListener('scroll', () => {
                                if (window.scrollY > 500) {
                                    scrollBtn.classList.add('visible');
                                } else {
                                    scrollBtn.classList.remove('visible');
                                }
                            });

                            // Scroll Top Action
                            scrollBtn.addEventListener('click', () => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            });

                            // Mobile Menu Toggle
                            const navToggle = document.getElementById('navToggle');
                            const navLinks = document.getElementById('navLinks');
                            
                            if (navToggle && navLinks) {
                                navToggle.addEventListener('click', () => {
                                    navToggle.classList.toggle('active');
                                    navLinks.classList.toggle('active');
                                });

                                // Close menu when links are clicked
                                navLinks.querySelectorAll('a').forEach(link => {
                                    link.addEventListener('click', () => {
                                        navToggle.classList.remove('active');
                                        navLinks.classList.remove('active');
                                    });
                                });
                            }
                        });

                        // Fallback for dynamic content/navigation
                        setInterval(() => {
                            const revealElements = document.querySelectorAll('.reveal:not(.active)');
                            revealElements.forEach(el => observer.observe(el));
                        }, 1000);
                    `
                }} />
            </body>
        </html>
    )
}
