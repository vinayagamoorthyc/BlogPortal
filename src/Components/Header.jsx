import React from "react";
import { Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
function Head(){
    return(
        <div style={{backgroundColor:"#42d4bb",color:"white",height:"10vh",justifyContent:"center",display:"flex",borderRadius:"10px",alignItems:"center"}}>
            <Container>
            <h3 className="text-center" style={{fontFamily:"serif",fontSize:40}}>Blog-Hub
            </h3>
            </Container>
        </div>
    );
}
export default Head;