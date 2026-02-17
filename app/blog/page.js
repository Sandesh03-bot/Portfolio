export default function Blog() {
    const blogs = [
        { id: 1, date: '10 July, 2022', title: '12 unique example of portfolio websites', image: '/images/blog_1.png' },
        { id: 2, date: '10 July, 2022', title: '12 unique example of portfolio websites', image: '/images/blog_2.png' },
        { id: 3, date: '10 July, 2022', title: '12 unique example of portfolio websites', image: '/images/blog_3.png' },
    ];

    return (
        <main className="blog-page">
            <section className="hero section-padding">
                <div className="container">
                    <div className="section-header animate-slide-up">
                        <span style={{ color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Blog</span>
                        <h1 className="fluid-h1" style={{ marginTop: '1rem' }}>READ MY INSIGHTS</h1>
                    </div>

                    <div className="grid-3-col" style={{ marginTop: '5rem' }}>
                        {blogs.map((blog, index) => (
                            <div key={blog.id} className="service-card animate-slide-up" style={{ padding: '0', overflow: 'hidden', animationDelay: `${index * 0.1}s` }}>
                                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '250px', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="project-img" />
                                <div style={{ padding: '2rem' }}>
                                    <span style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>{blog.date}</span>
                                    <h3 style={{ fontSize: '1.25rem', marginTop: '1rem', lineHeight: '1.4' }}>{blog.title}</h3>
                                </div>
                            </div>
                        ))}
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
        </main>
    )
}
