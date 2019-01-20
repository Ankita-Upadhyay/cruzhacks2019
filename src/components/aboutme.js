import React, { Component } from 'react';

class About extends Component{
    render() {
        return(
            <div class="back1">
            <img
            src="https://res.cloudinary.com/dkcjqlakt/image/upload/v1547977198/Screen_Shot_2019-01-20_at_1.32.13_AM.png"
            alt="trainimg"
            class="centerchat" 
            />
            
            <h1 className="tech-char1"><a href="https://pusher.github.io/react-slack-clone/" rel="noopener noreferrer" target="_blank"
            className="channel"> Charity Chat</a></h1>
            <p class="tech-char-text">This is a chat room that allows users to start a chat about a charity topic of
            their choice. Users can type a topic name on the bottom left side such as "environment" and click "enter".
            Users can also upload images. It's fairly self-explanatory so try it out for yourself
            <a href="https://pusher.github.io/react-slack-clone/" rel="noopener noreferrer" target="_blank"
            className="channel">  HERE</a>! <br></br>
            Note: Users will need to authenticate their Github to use this functionality.
            This is open source code and credits go to <a href="https://pusher.github.io/react-slack-clone/" rel="noopener noreferrer" target="_blank"
            className="channel">  THIS</a> repo.

            </p>
           
            

            </div>
            
        )

        
    }
}

export default About;