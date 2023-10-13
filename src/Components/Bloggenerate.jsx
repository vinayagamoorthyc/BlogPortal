import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import angle from './Asserts/angle.jpeg';
import art from './Asserts/art.jpeg';
import car from './Asserts/car.jpeg';
import cat from './Asserts/cat.jpeg';
import compute from './Asserts/compute.jpeg';
import dog from './Asserts/dog.jpeg';
import palm from './Asserts/palm.jpeg';
import pine from './Asserts/pine.jpeg';
import Blog from './Blog.jsx';
const data=[
  {name:'Cat', content:'The cat  is a domestic species of small carnivorous mammal.It is the only domesticated species in the family Felidae and is commonly referred to as the domestic cat or house cat to distinguish it from the wild members of the family.Cats are commonly kept as house pets but can also be farm cats or feral cats; the feral cat ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and their ability to kill vermin.', img:cat, author:'Carl Linnaeus '},
  {name:'Dog', content:'The dog  is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct Pleistocene wolves, and the modern wolf is the dogs nearest living relative.Dogs were the first species to be domesticated by hunter-gatherers over 15,000 years ago before the development of agriculture.Due to their long association with humans, dogs have expanded to a large number of domestic individuals and gained the ability to thrive on a starch-rich diet that would be inadequate for other canids.', img:dog, author:'Carl Linnaeus'},
  {name:'Computing', content:'Computing is any goal-oriented activity requiring, benefiting from, or creating computing machinery. It includes the study and experimentation of algorithmic processes, and development of both hardware and software. Computing has scientific, engineering, mathematical, technological and social aspects. Major computing disciplines include computer engineering, computer science, cybersecurity, data science, information systems, information technology, digital art and software engineering.', img:compute, author:'Charles Babbage'},
  {name:'Angel', content:'Abrahamic religions often depict angels as benevolent celestial intermediaries between God (Creator of all) (or Heaven) and humanity.Other roles include protectors and guides for humans, such as guardian angels, and servants of God. Abrahamic religions describe angelic hierarchies, which vary by religion and sect. Some angels have specific names (such as Gabriel or Michael) or titles (such as seraph or archangel). Those expelled from Heaven are called fallen angels, distinct from the heavenly host', img:angle, author:'Jesus'},
  {name:'Art', content:'Art is a diverse range of human activity, and resulting product, that involves creative or imaginative talent expressive of technical proficiency, beauty, emotional power, or conceptual ideas.', img:art, author:'picasso'},
  {name:'Palm', content:'The Arecaceae is a family of perennial, flowering plants in the monocot order Arecales. Their growth form can be climbers, shrubs, tree-like and stemless plants, all commonly known as palms. Those having a tree-like form are called palm trees. Currently, 181 genera with around 2,600 species are known,most of which are restricted to tropical and subtropical climates. Most palms are distinguished by their large, compound, evergreen leaves, known as fronds, arranged at the top of an unbranched stem. However, palms exhibit an enormous diversity in physical characteristics and inhabit nearly every type of habitat within their range, from rainforests to deserts.', img:palm, author:'Kamarajar'},
  {name:'Pine', content:'A pine is any conifer tree or shrub in the genus Pinus pinus of the family Pinaceae. Pinus is the sole genus in the subfamily Pinoideae. World Flora Online, created by the Royal Botanic Gardens, Kew and Missouri Botanical Garden, accepts 187 species names of pines as current, together with more synonyms. The American Conifer Society (ACS) and the Royal Horticultural Society accept 121 species. Pines are commonly found in the Northern Hemisphere. Pine may also refer to the lumber derived from pine trees; it is one of the more extensively used types of lumber. The pine family is the largest conifer family and there are currently 818 named cultivars (or trinomials) recognized by the ACS.', img:pine, author:'Pinus yorkshirensis'},
  {name:'Car', content:'Motor Cars Limited is a British luxury automobile maker which has operated as a wholly owned subsidiary of BMW AG since 2003 – as the exclusive manufacturer of Rolls-Royce-branded motor cars. The company`s administrative and production headquarters are located on the 42-acre (17 ha) Goodwood Estate in Goodwood, West Sussex, England, United Kingdom.', img:car, author:'Vickers'}
];

function Bloggenerate(){
  const [info,setinfo]=useState(data);
  const [user,setUser]=useState({});
  const [status,setStatus]=useState(true);
    function storeData()
    {
        let tite=document.getElementById("title").value;
        let contnt=document.getElementById("content").value;
        let url=document.getElementById("url").value;
        let auth=document.getElementById("author").value;
        function store(){
         return {
            name:tite,
            content:contnt,
            img:url,
            author:auth
         }
        }
        let da=store();
        setUser(da);
        data.push(da);
        console.log(data);
        setinfo(data);
        setStatus(false);
    }
    return (
      <>
        <Card className='m-3'>
        <Card.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Title:
        </InputGroup.Text>
        <Form.Control
          id="title"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
       </InputGroup>

      <br />

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Content:
        </InputGroup.Text>
        <Form.Control
          id="content"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
       </InputGroup>

       <br />

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          URL:
        </InputGroup.Text>
        <Form.Control
          id="url"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
       </InputGroup>

       <br />

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Author:
        </InputGroup.Text>
        <Form.Control
          id="author"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
       </InputGroup>
  
     <center><Button variant="outline-dark" onClick={storeData}>Create Blog</Button></center>
        </Card.Body>
      </Card>
      <div>
      {info.map(x=><Blog name={x.name} content={x.content} img={x.img} author={x.author}/>)}
      </div>
      <div hidden={status}>
        <Blog props={user}/>
      </div>
      </>
    );
}
export default Bloggenerate;
export { data };
