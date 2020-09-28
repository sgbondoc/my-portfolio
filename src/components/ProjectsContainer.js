import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap'

class ProjectsContainer extends Component {
    state = {
      projects: [
        {
          id: 3,
          title: "Corgi Connect",
          imgsrc: "https://i.imgur.com/XuBFerkm.png",
          tech: "MERN + Materialize",
          githubLink: "https://github.com/sgbondoc/SEI-629-Project-One-Game" ,
          // appLink:
        },
        {
          id: 2,
          title: "Show Me the Boba",
          imgsrc: "https://i.imgur.com/XuBFerkm.png",
          tech: "MERN + reactstrap",
          githubLink: "https://github.com/sgbondoc/SEI-629-Project-One-Game",
          // appLink:
        },
        {
          id: 1,
          title: "Fast Food Memory",
          imgsrc: "https://i.imgur.com/XuBFerkm.png",
          tech: "Javascript + HTML + CSS",
          githubLink: "https://github.com/sgbondoc/SEI-629-Project-One-Game",
          // appLink:
        },
      ]
    }
  
    renderProjectInfo = () => {
        let projectList = this.state.projects.map((project) => {
            return (
                <div className="card-container">
                    <div className="project-info" key={ project.id }>
                        <Card style={{ width: "18rem" }}>
                            <CardImg top width="100%" src={ project.imgsrc } alt="Project Homepage" />
                            <CardBody>
                                <CardTitle>{ project.title }</CardTitle>
                                <CardSubtitle>{ project.tech }</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button href={ project.githubLink }>Check it out!</Button>
                            </CardBody>
                        </Card>
                    </div>    
                </div>
            )       
        })
  
        return (
            <div className="project-gallery">{ projectList }</div>
        )
    }    

    render () {
        return (
            <div className="project-container">{ this.renderProjectInfo() }</div>
        )
    }    
}
  
export default ProjectsContainer