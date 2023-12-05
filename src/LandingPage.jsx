import React from "react";

class LandingPage extends React.Component {
    render(){
        return(
            
                

            <div className="row content-wrapper page1">
            <div className="col-md-5 ">
             <h1>Let's explore <br></br>your own <span className="name">metaverse</span> <br></br>world.</h1>
    
             <br></br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut excepturi necessitatibus quis dolorem quo iusto adipisci minus ducimus deserunt nihil consequatur, omnis consectetur eaque incidunt architecto non </p>
    
            <br></br>
            <button type="button" className="btn btn b1 content-wrapper button1">Explore Now</button>
        
                    <button type="button" className="btn btn-default btn-l b2 content-wrapper button2">
                        <span class="glyphicon glyphicon-play-circle page6"> </span> Learn more
                    </button>
            </div>
        
            <div class="col-md-7 content-wrapper">
                <div class="img1"> </div>
                <div class="img2"> </div>
            </div>
                
          
        </div>
     
        );
    }
}

export default LandingPage;