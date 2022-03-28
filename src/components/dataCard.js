import React from 'react'
import { CardBox,CardContainer,CardItem ,DeleteButton,EditButton} from "./dataCardStyles"
import { useState,useEffect } from 'react'


function DataCard() {
  const [onBoardingStatus,setOnboardingStatus] = useState([])
  useEffect(()=> {
async function getData(){
       await fetch("http://localhost:8080/employeeapproval",{
        method:"POST",
        mode:'no-cors',
        headers:{"Content-Type":"application/json"},
        body:{
            "EID":1,
            "FirstName":"rahul"
        }

      }).then(re=>{
        console.log(re)  
        // setOnboardingStatus(re.json())
      })
      }
 getData()
      },[])

  const MainDataCardComponent = (key)=>{
      console.log(key)
  return(
    <CardItem key={key.obid}>
      <h2>
  {(key.FirstName)}
      </h2>
      <p>{key.Email}</p>
      <p>name: {key.AssignerName}</p>
  <EditButton>
    Edit
  </EditButton>
    </CardItem>
  )
  }

  return (
    <>

    <CardContainer> 
    <CardBox>
      {onBoardingStatus.map(
        MainDataCardComponent
        )}
</CardBox>
</CardContainer> 
        </>
  )
}

export default DataCard