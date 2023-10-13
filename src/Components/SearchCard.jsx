import { useState } from "react";
import { Button, Card } from "react-bootstrap";
const styles = {
  cardImage: {
    width:100,
    height:100,
    borderRadius: 20,
    margin:10
  }
}
function SearchCard(props)
{
  const [state,setState]=useState('hidden');

  function ChangeState(){
    setState((state!=='hidden')?'hidden':''); 
  }
    return( 
    <Card className='m-3'>
    <Card.Body>
    <Card.Title><h1 style={{backgroundColor:"#42d4bb",color:"white",height:"7vh",justifyContent:"center",fontFamily:"serif",display:"flex",alignItems:"center"}}>{props.name}</h1></Card.Title>
        <p style={{display:"flex"}}>
        <Card.Img variant='top' src={props.img} style={styles.cardImage} alt=''/>
        <Card.Text style={{paddingLeft:"20px"}}>{props.content}</Card.Text>
        </p>
        <Card.Text style={{float:"right"}}>-{props.author}</Card.Text>
        <Button variant="outline-dark" onClick={ChangeState}>Add Comment</Button>
        <div>
        <textarea style={{borderRadius: 5}} rows={7} cols={40} hidden={state} placeholder='Comments....'></textarea>
        </div>
    </Card.Body>
  </Card>
  );
}
export default SearchCard;