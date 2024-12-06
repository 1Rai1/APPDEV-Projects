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
            <h4><strong>Hobbies</strong></h4>
            <p>{props.hobbies}</p>
            <h4><strong>Skills</strong></h4>
            <li>
                Problem Solver
            </li>
            <li>
                Critical Thinking
            </li>
            <li>
                Communication
            </li>
            <li>
                Teamwork
            </li>
            <li>
                Time Management
            </li>
            <li>
                Adaptability
            </li>
            <li>
                Attention to Detail
            </li>
         </div>
        </div>
      
    )
}
Body.propTypes = {
    name: PropTypes.string,
    hobbies: PropTypes.string,
    skills: PropTypes.bool,
}
Body.defaultProps ={
    name: "Clayton Soronio",
    hobbies: "Ang mga ginawaga sa free time ko ay naglalaro ng mga video games kagaya ng League of Legends, Player's Unknown BattleGround, Valorant at iba pa.",
   
}

