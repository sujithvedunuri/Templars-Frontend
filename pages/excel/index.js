import React from "react";
import { ExportCSV } from "../../components/exportcsv"
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import styled from "styled-components";

const Temp = styled.div`
display: flex;
flex-direction: row;

`

export default function Csv() {
    const iss_id = 123
    const iss_name = "kakashi"
    const viewers = [
        {SNO:1,Email:"",FirstName:"",LastName:"",Location:"",Department:"",Role:"",ManagerName:"", HRName:"",AssigneeID:iss_id,AssigneeName:iss_name,IssuerID:"",IssuerName:"",PhoneNumber:1234567890,Region:""},
    ]
    const fileName = 'Template';
  return (
    <React.Fragment>
     <Navbar/>
     <Temp>
     <Sidebar/>
    <ExportCSV csvData={viewers} fileName={fileName}/>
    </Temp>
    </React.Fragment>
  )
}
