import PropTypes from 'prop-types'
import './index.css'
export default function Body(props){
    return(
        <div className="Background">
         <div className="person">
            <img className="person-picture" src="Pic.JPG" alt="profile-icon" />
            <h3><strong>{props.name}</strong></h3>
            <p>Ako ay isang second-year BSCS student, at sabihin ko sa'yo, 
                para itong pagsubok na kontrolin ang isang computer na nagwawala 
                habang binabato ka ng error messages. Ang hirap—yung tipo na, 
                "Alam ko ba talaga 'to?" level ng hirap—pero kapag gumana na 'yung code,
                 para kang naka-unlock ng bagong antas ng pagka-wizard. Kaya oo, challenging siya,
                  pero medyo masaya din... in a "bakit ko nga ba ginagawa 'to sa sarili ko?" na paraan.</p>
            <h4>Hobbies</h4>
            <p>asdasd</p>
            <h4>Skills</h4>
            <p>asdasd</p>
         </div>

        </div>
      
    )
}
Body.propTypes = {
    name: PropTypes.string,
    food: PropTypes.string,
    isHealth: PropTypes.bool,
    age: PropTypes.number
}
Body.defaultProps ={
    name: "Clayton Soronio",
   
}

