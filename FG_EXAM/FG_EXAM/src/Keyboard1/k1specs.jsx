import PropTypes from 'prop-types';
import './k1.css'
export default function Specs(props) {
    return (
        <div className='Info'>
         <div className="Specs">
            <h2><strong>Specification:</strong></h2>
            <ul>
                <li><strong>Switch Type:</strong> {props.type}</li>
                <li><strong>Key Layout:</strong> {props.layout}</li>
                <li><strong>Backlight:</strong> {props.light}</li>
                <li><strong>Connectivity:</strong> {props.connect}</li>
                <li><strong>Dimensions:</strong> {props.dimensions}</li>
                <li><strong>Weight:</strong> {props.weight}</li>
                <li><strong>Cable length:</strong> {props.length}</li>
                <li><strong>Additional features:</strong> {props.features}</li>
            </ul>
            </div>
            <div className="Box">
                <h1><strong>In the box:</strong></h1>
                <li>
                KB-X1000 Keyboard 
                </li>
                <li>
                USB Cable 
                </li>
                <li>
                User Manual 
                </li>
                <li>
                Keycap Removal Tool 
                </li>
                <li>
                Warranty Card 
                </li>
            </div>
            <div className='Features'>
                <h1><strong>Key Features</strong></h1>
                <li>
                    <p><strong>Customizable RGB Backlighting: </strong>Personalize the keyboard’s illumination with a wide range of colors and lighting effects. </p>
                </li>
                <li>
                <p><strong>Mechanical Switches: </strong>Cherry MX Red switches for a responsive and smooth typing experience. </p>
                </li>
                <li>
                <p><strong>Programmable Keys: </strong>Assign macros and custom functions to any key with the included software. </p>
                </li>
                <li>
                <p><strong>Anti-Ghosting & N-Key Rollover: </strong>Ensure accurate keypress registration during intense gaming sessions. </p>
                </li>
                <li>
                <p><strong>Dedicated Media Controls: </strong>Easily control music and videos with dedicated media keys. </p>
                </li>
            </div>
        </div>
    );
}

Specs.propTypes = {
    type: PropTypes.string,
    layout: PropTypes.string,
    light: PropTypes.string,
    connect: PropTypes.string,
    dimensions: PropTypes.string,
    weight: PropTypes.string,
    length: PropTypes.string,
    features: PropTypes.string
};

Specs.defaultProps = {
    type: "Cherry MX Red (Mechanical)",
    layout: "Full-size (104 keys)",
    light: "RGB with customizable colors",
    connect: "Wired (USB 2.0)",
    dimensions: "440 mm x 135 mm x 35 mm",
    weight: "1.2 kg",
    length: "1.8 meters",
    features: "Anti-ghosting, N-key rollover, dedicated media controls"
};
