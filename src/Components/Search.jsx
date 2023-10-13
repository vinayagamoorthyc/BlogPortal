import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { data } from './Bloggenerate.jsx';
import SearchCard from './SearchCard.jsx';
function Search()
{
    const [dt,setDt]=useState(["",""]);
    const [dis,setDis]=useState(true);
    function displayDetails()
    {
      let name=document.getElementById("ser").value;
      const filterData=data.filter(x=>x.name===name);
      if(name!='')
      {
        if(filterData!='')
          {
            setDis(false);
            setDt(filterData);
            console.log(filterData);
            console.log(filterData.name);
          }
          else{
            alert("Sorry No such Blog exist!");
          }
      }
      else{
        alert("Empty");
      }
    }
    return(
        <Container>
        <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          id='ser'
        />
        <Button variant="outline-dark" onClick={displayDetails}>Search</Button>
      </Form>
      <div hidden={dis}>
      <SearchCard name={dt.map(x=>x.name)} img={dt.map(x=>x.img)} content={dt.map(x=>x.content)} author={dt.map(x=>x.author)}/>
      </div>
      </Container>
    );
}
export default Search;
