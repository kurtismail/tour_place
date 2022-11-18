import './Header.scss';
import image from "../../helper/vacations-tour.png";

const Header = () => {
    return (
        <div className="header">
            <img className="img" src={image} alt="" />
            <h1>Popular Tour Places</h1>
        </div>
    )
}

export default Header;