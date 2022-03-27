import { CSVLink} from 'react-csv'
import { CsvButton } from '../../styles/csvStyles';


export default function Csv() {
    const ass_name = "Kakashi"
    const data = [
        {   
            sno:1,
            first_name:"edit",
            last_name:"edit",
            email:"edit",
            role:"edit",
            phno:1234567890,
            dept:"edit",
            assignee_name:ass_name,
            assignee_role:"edit",
            assignee_id:"edit",
            hr:"edit",
            manager:"edit",
            issuer_name:"edit",
            issuer_id:"edit"
        },
    ];

    const headers = [
        {
            label: "SNO", key: "sno"
        },
        {
            label: "First_Name", key: "first_name"
        },
        {
            label: "Last_Name", key: "last_name"
        },
        {
            label: "Email", key: "email"
        },
        {
            label: "Role", key: "role"
        },
        {
            label: "PHNO", key: "phno"
        },
        {
            label: "Dept", key: "dept"
        },
        {
            label: "Assignee_Name", key: "assignee_name"
        },
        {
            label: "Assignee_Role", key: "assignee_role"
        },
        {
            label: "Assignee_Id", key: "assignee_id"
        },
        {
            label: "HR", key: "hr"
        },
        {
            label: "Manager", key: "manager"
        },
        {
            label: "Issuer_Name", key: "issuer_name"
        },
        {
            label: "Issuer_Id", key: "issuer_id"
        },
    ]


  return (
    <CsvButton>
    <CSVLink data={data} headers={headers} filename={"Template.csv"}>Download</CSVLink>
    </CsvButton>
  )
}

