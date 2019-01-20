import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};    
        
    }

    toggleCategories(){

        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height: '210px', background: 'url(https://res.cloudinary.com/dkcjqlakt/image/upload/v1547960189/Screen_Shot_2019-01-19_at_8.55.28_PM.png) center / cover'}}></CardTitle>
                    <CardText>Find out about all the different programs you can give back to! There is an
                    A-Z list of programs including ACE (Academic Excellence), African American Resource Center, and
                    Center for Sustainable Energy and Power Systems (CenSEPS) to name a few. 
                    </CardText>
                     <CardActions border className="button-bootstrap">
                     <a href="https://giving.ucsc.edu/giving-opportunities/" rel="noopener noreferrer" target="_blank"><Button colored>Give Back</Button></a>
                     <a href="https://alumni.ucsc.edu/search-designations/designations-results.php" rel="noopener noreferrer" target="_blank"><Button colored>A-Z List</Button></a> 
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                     </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '452', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '245px', background: 'url(https://res.cloudinary.com/dkcjqlakt/image/upload/v1547960934/Screen_Shot_2019-01-19_at_9.07.47_PM.png) center / cover'}}></CardTitle>
                <CardText>Did you know that donating $1000 will qualify you as a Chancellor's Associate?
                Find out where the donations are going and join in on the action!</CardText>
                 <CardActions border className="button-bootstrap">
                 <a href="https://giving.ucsc.edu/giving-opportunities/ucsc-fund/" rel="noopener noreferrer" target="_blank"><Button colored>UCSC Funds</Button></a>
                 <a href="https://secure.ucsc.edu/s/1069/bp18/interior.aspx?sid=1069&gid=1001&pgid=761&cid=1722"rel="noopener noreferrer" target="_blank"><Button colored>Give Now</Button></a>
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                 </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height: '210px', width: '350px', background: 'url(https://res.cloudinary.com/dkcjqlakt/image/upload/v1547961348/Screen_Shot_2019-01-19_at_8.47.18_PM.png) center / cover'}}></CardTitle>
                    <CardText>Every year, UCSC hosts "Giving Day" where anyone can register a project and donate to a 
                    specific cause. For instance, Scientific Slug is raising money for researching and printing costs.
                    Check out some of the projects and/or register your own!  </CardText>
                     <CardActions border className="button-bootstrap">
                     <a href="https://givingday.ucsc.edu/?cfpage=submit-campaign" rel="noopener noreferrer" target="_blank"><Button colored>Giving Day</Button></a>
                     <a href="https://givingday.ucsc.edu/Registered-Projects/Registered-Projects.html" rel="noopener noreferrer" target="_blank"><Button colored>Projects</Button></a> 
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                     </CardMenu>
                </Card>
            </div>
                
                
            )
        } else if(this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '170px', background: 'url(https://res.cloudinary.com/dkcjqlakt/image/upload/v1547962162/Screen_Shot_2019-01-19_at_9.28.30_PM.png) center / cover'}}></CardTitle>
                <CardText>UCSC has a great sustainability program - Project Clearinghouse - sponsored by the Sustainability Office where one can
                select projects from the Earth Summit to the Thimann Water Fountains to not just donate money but work
                in person to maintain the campus's beautiful aesthetic. Find out more about Project Clearinghouse!</CardText>
                 <CardActions border className="button-bootstrap">
                 <a href="https://sustainability.ucsc.edu/about/donate.html" rel="noopener noreferrer" target="_blank"><Button colored>Donate</Button></a>
                 <a href="https://projectclearinghouse.ucsc.edu/" rel="noopener noreferrer" target="_blank"><Button colored>Projects</Button></a> 
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                 </CardMenu>
            </Card>
            )
        }else if(this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '170px', background: 'url(https://res.cloudinary.com/dkcjqlakt/image/upload/v1547968858/Screen_Shot_2019-01-19_at_11.18.02_PM.png) center / cover'}}></CardTitle>
                <CardText>UCSC's Molecular, Cellular, and Developmental (MCD) Biology Department
                conducts research in various areas including Alzheimer's Disease, stem cells, cancer,
                neuroscience, inflammation, and tropical diseases. Your contributions will help fund these areas
                of research. Find out more and/or give back!</CardText>
                 <CardActions border className="button-bootstrap">
                 <a href="https://mcd.ucsc.edu/research/index.html" rel="noopener noreferrer" target="_blank"><Button colored>Research</Button></a>
                 <a href="https://mcd.ucsc.edu/support-us/index.html" rel="noopener noreferrer" target="_blank"><Button colored>Support Us</Button></a> 
                 <a href="https://secure.ucsc.edu/s/1069/bp18/interior.aspx?sid=1069&gid=1001&pgid=761&dids=125" rel="noopener noreferrer" target="_blank"><Button colored>Donate</Button></a>
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                 </CardMenu>
            </Card>
            )
        }else if(this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '170px', background: 'url(https://res.cloudinary.com/dkcjqlakt/image/upload/v1547970934/Screen_Shot_2019-01-19_at_11.54.56_PM.png) center / cover'}}></CardTitle>
                <CardText>UCSC's Jack Baskin School of Engineering (JBSOE) includes a variety of projects from
                Storage Systems Research to Interactive Systems for Individuals with Special Needs to 
                Robotics and Control Engineering - to name a few. Find out more about these projects and/or give back! </CardText>
                 <CardActions border className="button-bootstrap">
                 <a href="https://www.soe.ucsc.edu/research" rel="noopener noreferrer" target="_blank"><Button colored>Research</Button></a>
                 <a href="https://secure.ucsc.edu/s/1069/bp18/interior.aspx?sid=1069&gid=1001&pgid=780&cid=1749&dids=260" rel="noopener noreferrer" target="_blank"><Button colored>Support Us</Button></a> 
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                 </CardMenu>
            </Card>
            )
        }

    }




    render() {
        return(
            <div class="charity-color">
              <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Giving to UCSC</Tab>
                <Tab>Sustainability</Tab>
                <Tab>MCD Bio</Tab>
                <Tab>JBSOE</Tab>
              </Tabs>

            
                <Grid className="projects-grid">
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                
            

            </div>
        )

        
    }
}

export default Projects;