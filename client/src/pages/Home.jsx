import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
function Home() {
    return (
        <>
            <section className="hero">
                <header id="header">
                    <a id="logo" href="#">
                        logo
                    </a>
                    <nav>
                        <a id="menu-icon">≡</a>
                    </nav>
                </header>
                <header className="hero-header">
                    <h1 className="hero-title">The title of this hero module</h1>
                </header>
                <footer className="hero-footer">
                    <Link className="button button-primary" to="/signin">
                        Sign in
                    </Link>
                    <Link className="button button-primary" to="/signup">
                        Sign up
                    </Link>
                </footer>
            </section>
            <article>
                <h2>Some additional content</h2>
                <p>
                    The rest of the page content continues below the hero. You can use the
                    hero at the top of your page, e.g. the home page. A hero is great to
                    display a high quality picture together with tasty title.
                </p>
                <p>
                    Ad donec tincidunt torquent ultricies convallis sodales faucibus magna,
                    fringilla lorem blandit sollicitudin donec faucibus curae orci molestie,
                    et proin curae aliquet venenatis ligula amet vivamus orci varius arcu.
                </p>
                <p>
                    Laoreet fusce condimentum venenatis quisque imperdiet ornare cras faucibus
                    convallis, pharetra habitasse elementum ut bibendum per sociosqu phasellus
                    etiam, velit faucibus integer torquent leo elementum maecenas netus.
                </p>
            </article>
        </>

    )
}

export default Home