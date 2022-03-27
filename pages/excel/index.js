import { ExportCSV } from "../../components/exportcsv"

export default function Csv() {
    const iss_id = 123
    const iss_name = "kakashi"
    const viewers = [
        {SNO:1,Email:"",FirstName:"",LastName:"",Location:"",Department:"",Role:"",ManagerName:"", HRName:"",AssigneeID:iss_id,AssigneeName:iss_name,IssuerID:"",IssuerName:"",PhoneNumber:1234567890,Region:""},
    ]
    const fileName = 'Template';
  return (
    <>
    <ExportCSV csvData={viewers} fileName={fileName}/>
    </>
  )
}
