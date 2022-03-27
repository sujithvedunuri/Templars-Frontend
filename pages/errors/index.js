import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

const Temp = styled.div`
display: flex;
flex-direction: row;
`

export default function Error() {
  return (
    <React.Fragment>
     <Navbar/>
     <Temp>
     <Sidebar/>
    <h1>Error Page</h1>
    </Temp>
    </React.Fragment>
  )
}
