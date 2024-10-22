import { NavLink } from "react-router-dom";

export const Error = () => {
    return(
        <>
        <section id="error-page">
            <div className="content">
                <h4>Oops! Something went wrong.</h4>
                <p>
                It seems you've wandered off the map. Let’s get you back on track—head to the homepage or use the search bar to find your ideal space.
                </p>

                <div className="btns">
                    <NavLink to="/">Return Home</NavLink>
                    <NavLink to="/contact">Report Problem</NavLink>
                </div>
            </div>
        </section>
        </>
    );
}