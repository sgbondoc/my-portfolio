import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap'

class ProjectsContainer extends Component {
    state = {
      projects: [
        {
            id: 4,
            title: "Corgi Connect",
            imgsrc: "https://i.imgur.com/4KEi5PCm.png",
            tech: "MERN + Materialize",
            info: "Full stack web application built with MERN technologies plus JWT token auth, multiple model relationships, and styling with materialize.",
            githubLink: "https://github.com/sgbondoc/SEI-629-Project-Four-App",
            // appLink:
        },  
        {
          id: 3,
          title: "Show Me the Boba",
          imgsrc: "https://i.imgur.com/B2rkC4Wm.png",
          tech: "MERN + reactstrap",
          info: "Full stack web application built with MERN technologies and a focus on foundational react class components and styling with reactstrap and CSS.",
          githubLink: "https://github.com/sgbondoc/SEI-629-Project-Three-App",
          // appLink:
        },
        {
          id: 2,
          title: "Custom Superheroes",
          imgsrc: "https://i.imgur.com/IYUWLqrm.jpg",
          tech: "Mongoose + Express + Node",
          info: "Collaborated on a full stack app built with MEN technologies exhibiting full CRUD functionality, two-model relatiionship, and customization.",
          githubLink: "https://github.com/sgbondoc/SEI-629-Project-Two-App",
          // appLink:
        },
        {
          id: 1,
          title: "Fast Food Memory",
          imgsrc: "https://i.imgur.com/XuBFerkm.png",
          tech: "Javascript + HTML + CSS",
          info: "Web browser game utilizing core fundamentals in JS, HTML, and CSS with a focus on object-oriented programming and DOM manipulation.",
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
                                <CardText>{ project.info }</CardText>
                                <Button href={ project.githubLink }>View Github</Button>
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