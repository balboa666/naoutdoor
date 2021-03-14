
import { Link } from 'react-router-dom';
const Slope = () => {
    return (
        <div className="bakken">
            <img src="img/bakke.jpg" alt="Løypekart" />
                <Link to="/">
                    <img className="mx-auto d-block footer fixed-bottom mb-2" src="img/left-arrow.png" id="back" alt="Back" />
                </Link>
        </div>);
}
export default Slope;