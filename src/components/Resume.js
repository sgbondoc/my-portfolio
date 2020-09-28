import React from 'react'
import { Button } from 'reactstrap'

const Resume = () => {
    return (
        <div className="resume">
            <h4>Resume & Skills</h4>
                <div className="resume-buttons">
                    <Button href="https://docs.google.com/document/d/1N9IeHtGszLG3_5XyAystwwQj6dtE6FAklthjn7cGFKM/edit?usp=sharing">View Resume</Button>
                </div>
                <div className="skills-icons-row1">
                    <img src="https://i.imgur.com/bP5C9EVt.png" alt="React" />
                    <img src="https://i.imgur.com/DWyPpMat.png" alt="Node" />
                </div>    
                <div className="skills-icons-row2">    
                    <img src="https://i.imgur.com/aq7kGeKs.png" alt="Javascript" />
                    <img src="https://i.imgur.com/wTgYWCZs.png" alt="HTML" />
                    <img src="https://i.imgur.com/LOl5sMEs.png" alt="CSS" />
                </div>
        </div>
    )
}

export default Resume