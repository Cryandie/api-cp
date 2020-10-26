import React from "react";
import {Navbar, Button , Form , Nav , FormControl} from "react-bootstrap";



export const Navigation = ({setNameSearch,setRateSearch} ) => {



    return (
<div>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Jobs</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="string"  placeholder="Search by title" className="mr-sm-2" onChange={e =>setNameSearch(e.target.value)} />
      <FormControl type="number"  placeholder="Search by rate" className="mr-sm-2" onChange={e =>setRateSearch(e.target.value)} />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
</div>
)
}
