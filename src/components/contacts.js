import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render() {
        return(
            <div class="back1">
            <img
            src="https://res.cloudinary.com/dkcjqlakt/image/upload/v1547954711/slugcharityfinal.png"
            alt="trainimg"
            class="center" 
            />
            
            <h1 className="why">Why SlugCharity?</h1>
            
            <p class="tech-char-text">
            <h3>Inspiration</h3><hr></hr>
            UCSC has various charity initiatives which aim to give back to the community and the university itself and we were inspired by all the different opportunities to contribute. 
            
            <h3>What It Does</h3><hr></hr>
            Our web app includes a mini YouTube clone which returns videos that are geared towards using tech to create as well as give back to charity initiatives. Our web app also consolidates many of the UCSC giving back initiatives into one place. We also have a chat app in which users can discuss charity/giving back related topics. 
            <h3>How We Built It</h3><hr></hr>
            We used React and Bootstrap elements to render our web app. We utilized the React card component. We used Cloudinary to host our images on a web server and Heroku to deploy the web app. We also utilized Chatkit to render the chat portion of our app.   
            
            <h3>Challenges We Ran Into</h3><hr></hr>
            We had a hard time figuring out what we wanted to build. We were inspired by the Tech Cares category and finally reached a decision as to what we will make - a SlugCharity web app which raises awareness of opportunities to give back with UCSC as well as the community. However, we didn't end up deciding upon this until the day before the hackathon which is why it could definitely be more polished. We also had trouble pushing and merging as Git was slightly confusing at times. Due to this, we consolidated the project in one person's repo. Many of us were also new to React so there was definitely a learning curve there. 
            
            <h3>Accomplishments That We're Proud Of</h3><hr></hr>
            We are proud of our colorful UI aesthetic as they match the UCSC colors. We are also proud of creating the YouTube player which returns videos specifically related to tech+charity. We used open source code for this but made our own changes. We are also proud of implementing the React card components as it makes for cleaner UI/UX. We also generated our own YouTube API key from the Google Developers Console and successfully implemented that in our project.  
            
            <h3>What We Learned</h3><hr></hr>
            We learned that UCSC has many charity initiatives that go beyond just Giving Day. For instance, the UCSC Sustainability Department has its own projects ranging from helping out with the Rachel Carson Garden to the Thimann Water Fountains. We also learned how to code in React and deploy our app on Heroku. 
            
            <h3>What's Next For Slug Charity</h3><hr></hr>
            We want SlugCharity to be available for all UCSC students to use. Of course, the UCSC website itself is great but we want students to find all the charity/donation opportunities within one place. There are so many projects students are not aware of and this web app aims to increase awareness of that! We hope to release this app to all UCSC students.

            </p>
            

            </div>
        )

        
    }
}

export default Contact;