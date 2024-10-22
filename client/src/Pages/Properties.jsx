import { useAuth } from "../store/auth";
import "./Properties.css"; // Link to the CSS file

export const Properties = () => {
    const { services } = useAuth();

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Properties</h1>
            </div>
            <div className="grid">
                {
                    services.map((curElem) => {
                        const { _id, propertyName, propertyType, location, pricePerNight, description } = curElem;

                        return (
                            <div className="card" key={_id}>
                                <div className="card-img">
                                    <img src="/Images/building.jpg" alt={propertyName} className="image" />
                                </div>
                                <div className="card-details">
                                    
                                    <p>Property Name: {propertyName}</p>
                                    <p>Property Type: {propertyType}</p>
                                    
                                    <h2>Location: {location}</h2>
                                    <p>Price per Night: {pricePerNight}</p>
                                    <p>Description: {description}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};
