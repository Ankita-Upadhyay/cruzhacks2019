import React, { Component } from 'react';


class Resume extends Component{
    render() {
        return(
            
            <div class="back1">
            <img
            src="https://res.cloudinary.com/dkcjqlakt/image/upload/v1547956914/Screen_Shot_2019-01-19_at_8.00.03_PM.png"
            alt="resumeimg"
            class="center2"
            />
            <h1 className="tech-char"><a href="https://youtubeplayerankita.herokuapp.com/" rel="noopener noreferrer" target="_blank"
            className="channel"> Tech + Charity Media</a></h1>
           
            
            <p class="tech-char-text">We all love surfing on YouTube but unfortunately, we tend to get distracted.
            This is why we used the YouTube API key from the Google Developers Console to render a YouTube clone that
            focuses on only the search term "tech + charity". It works like a YouTube search page and was built to 
            encourage Slugs to search up initiatives that involve giving back to the community via tech. Click 
            <a href="https://youtubeplayerankita.herokuapp.com/" rel="noopener noreferrer" target="_blank"
            className="channel"> HERE</a> to explore!
            
            </p>
            
            </div>
            
        )

        
    }
}

export default Resume;