import PropTypes from 'prop-types';

export default function Body(props) {
    return (
        <div className="Keyboard">
            <img className="person-picture" src="https://placeholder.pics/svg/500x150" alt="profile-icon" />
            <h1>This is <strong>{props.name}</strong></h1>
            <p><strong>Product Overview:</strong></p>
            <p>{props.overview}</p>
        </div>
    );
}

Body.propTypes = {
    name: PropTypes.string,
    overview: PropTypes.string
};

Body.defaultProps = {
    name: "KB-X1000",
    overview: "The KB-X1000 is a high-performance mechanical keyboard designed for gamers, professionals, and everyday users who demand precision and comfort. It features customizable RGB backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming experience."
};
