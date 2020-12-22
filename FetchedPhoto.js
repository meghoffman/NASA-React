import React from 'react';




function Photo(){

        fetch("https://api.nasa.gov/planetary/apod?api_key=J1muDVFIu6si9hDaHkSGmwZPfatBS9f3Js24GfMO")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const title = data.title;
                const pic = data.url;
                const explanation = data.explanation;
                console.log(pic);
                console.log(title);
                console.log(explanation);    
       
                return(
                    <h1>{title}</h1>
                )
    
    })
   
     
    }
    
  
export default Photo;