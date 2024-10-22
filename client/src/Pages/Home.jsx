export const Home = () => {
    return <>
    <main>
        <section className="section-hero">
            <div className="container ">
                <div className="hero-content">
                    <h1 className="title">Find Your Next Business Hub</h1>
                    <p className="sub-title">
                    Explore a diverse range of commercial properties, from modern office spaces to bustling retail locations, tailored to meet the needs of growing businesses and established enterprises alike. Find the perfect setting to elevate your brand and drive success.
                    </p>

                    <div className="btn btn-group">
                        <a href="/login"><button className="btn">SignUp now</button></a>
                        <a href="/properties"><button className="btn secondary-btn">learn more</button></a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>;
};