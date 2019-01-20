import React, { Component } from 'react';
import {Cell, Grid} from 'react-mdl';

class LandingPage extends Component{
    render() {
        return(
            <div style= {{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src="https://res.cloudinary.com/dkcjqlakt/image/upload/v1547954711/slugcharityfinal.png"
                    alt="avatar"
                    className="avatar-img" 
                    />
                    
                    
                    <div className="banner-text">
                        <center><h1>Slug Charity</h1>
                        <hr/></center>
                        
                        <center><p className="slug">Where Slugs can go to give back. | Giving back consolidated in one place.</p></center>

                        <div className="social-links">
                         {/* LinkedIn */}
                         <a href="https://www.linkedin.com/school/ucsc/" rel="noopener noreferrer" target="_blank"> 
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                         </a>

                         {/* Github */}
                         <a href="https://www.facebook.com/ucsantacruz/" rel="noopener noreferrer" target="_blank"> 
                            <i className="fa fa-facebook-square" aria-hidden="true"/>
                         </a>

                        {/* YouTube */}
                        <a href="https://www.youtube.com/ucsantacruz" rel="noopener noreferrer" target="_blank"> 
                            <i className="fa fa-youtube-square" aria-hidden="true"/>
                         </a>
                        
                        {/* Instagram */}
                        <a href="https://www.instagram.com/ucsc/?hl=en" rel="noopener noreferrer" target="_blank"> 
                            <i className="fa fa-instagram" aria-hidden="true"/>
                         </a>

                        {/* Twitter */}
                        <a href="https://twitter.com/ucsc?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" rel="noopener noreferrer" target="_blank"> 
                            <i className="fa fa-twitter-square" aria-hidden="true"/>
                         </a>

                        </div>

                     </div>
                    </Cell>
                </Grid>
            </div>
        )

        
    }
}

export default LandingPage;