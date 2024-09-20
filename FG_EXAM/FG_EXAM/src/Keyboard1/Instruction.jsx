import PropTypes from 'prop-types';

export default function Instructions(props) {
    return (
        <div className='All-Instructions'>
            <div className='instructions'>
                <h1><strong>Instructions</strong></h1>
                <h2>{props.instruction1}</h2>
                <p>Carefully remove the keyboard and accessories from the box.</p>
                
                <h2>{props.instruction2}</h2>
                <ul>
                    <li>Plug the USB cable into an available USB port on your computer.</li>
                    <li>The keyboard should be automatically recognized and ready for use. No additional drivers are required.</li>
                </ul>
                
                <h2>{props.instruction3}</h2>
                <ul>
                    <li>Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.</li>
                    <li>Follow the on-screen instructions to install the software.</li>
                </ul>
                
                <h2>{props.instruction4}</h2>
                <ul>
                    <li>Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.</li>
                    <li>Replace keycaps by aligning them over the switch and pressing down until they click into place.</li>
                </ul>
            </div>

            <div className='Keyboard-Basic'>
                <h1>Using the Keyboard Basic</h1>
                <h2>{props.basic1}</h2>
                <p>Simply start typing; the keyboard is pre-configured with standard key mappings.</p>
                
                <h2>{props.basic2}</h2>
                <ul>
                    <li>Press Fn + F9 to cycle through preset lighting effects.</li>
                    <li>Use the configuration software to create custom lighting profiles.</li>
                </ul>
                
                <h2>{props.basic3}</h2>
                <ul>
                    <li>Open the configuration software.</li>
                    <li>Select the key you want to program.</li>
                    <li>Assign a macro or function and save your changes.</li>
                </ul>
                
                <h2>{props.basic4}</h2>
                <p>Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media control.</p>
            </div>

            <div className='Troubleshoot'>
                <h1>Troubleshoot</h1>
                <h2>{props.trouble1}</h2>
                <ul>
                    <li>Ensure the USB connection is secure.</li>
                    <li>Try connecting the keyboard to a different USB port.</li>
                    <li>Restart your computer if necessary.</li>
                </ul>
                
                <h2>{props.trouble2}</h2>
                <ul>
                    <li>Check if the backlight is disabled or set to a minimal brightness level.</li>
                    <li>Verify that the configuration software is properly installed.</li>
                </ul>
                
                <h2>{props.trouble3}</h2>
                <ul>
                    <li>Confirm that no physical obstructions are affecting the key.</li>
                    <li>Test the key in different applications to determine if the issue is software-related.</li>
                </ul>
            </div>

            <div className='Maintenance'>
                <h1>Maintenance and Care</h1>
                <h2>{props.Care1}</h2>
                <ul>
                    <li>Disconnect the keyboard from the computer.</li>
                    <li>Use a soft, dry cloth to clean the surface.</li>
                    <li>For deeper cleaning, carefully remove keycaps and use compressed air to remove debris.</li>
                </ul>
                
                <h2>{props.Care2}</h2>
                <ul>
                    <li>Store the keyboard in a cool, dry place.</li>
                    <li>Avoid exposure to liquids or extreme temperatures.</li>
                </ul>
            </div>
            <div className='Warranty'>
                <h1>Warranty and Support </h1>
                <ul>
                Warranty Period: 2 years from the date of purchase. 
                </ul>
                <ul>
                Customer Support: For assistance, contact customer support via the manufacturer’s website or call the support hotline at 1-800-555-1234. 
                </ul>
                <ul>
                Manufacturer’s Website: www.keyboardcompany.com 
                </ul>
                <ul>
                Customer Support Email: support@keyboardcompany.com 
                </ul>
                <ul>
                Support Hotline: 1-800-555-1234 
                </ul>
                <h1>“Thank you for choosing the KB-X1000. We hope you enjoy your new keyboard! Type Safe!” </h1>
            </div>
        </div>
    );
}

Instructions.propTypes = {
    instruction1: PropTypes.string,
    instruction2: PropTypes.string,
    instruction3: PropTypes.string,
    instruction4: PropTypes.string,
    basic1: PropTypes.string,
    basic2: PropTypes.string,
    basic3: PropTypes.string,
    basic4: PropTypes.string,
    trouble1: PropTypes.string,
    trouble2: PropTypes.string,
    trouble3: PropTypes.string,
    Care1: PropTypes.string,
    Care2: PropTypes.string
};

Instructions.defaultProps = {
    instruction1: "Unboxing:",
    instruction2: "Connecting the Keyboard:",
    instruction3: "Software Installation (Optional):",
    instruction4: "Keycap Removal and Replacement:",
    basic1: "Typing:",
    basic2: "Customizing Backlighting:",
    basic3: "Programming Keys:",
    basic4: "Using Media Controls:",
    trouble1: "Keyboard Not Recognized:",
    trouble2: "Backlight Issues:",
    trouble3: "Key Functionality Issues:",
    Care1: "Cleaning the Keyboard:",
    Care2: "Storage Recommendations:"
};
