/* eslint-disable react/prop-types */
import { Table } from "antd";
import "./styles/styles.css";

const columns = [
  {
    title: "Bed No",
    dataIndex: "bed_no",
    key: "bed_no",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Patient Name",
    dataIndex: "patient_name",
    key: "patient_name",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Doctor Name",
    dataIndex: "doctor_name",
    key: "doctor_name",
  },
  {
    title: "Admission Date",
    dataIndex: "admission_date",
    key: "admission_date",
  },
];

const data = [
  {
    key: "1",
    bed_no: "C701",
    patient_name: "Mahabobur Rahman",
    age: 32,
    gender: "Female",
    doctor_name: "Dr Asadul Jaman",
    admission_date: "2022-03-25",
  },
  {
    key: "2",
    bed_no: "C702",
    patient_name: "Faisal Bin Rahman",
    age: 32,
    gender: "Male",
    doctor_name: "Dr Asadul Jaman",
    admission_date: "2024-01-01",
  },
  {
    key: "3",
    bed_no: "C703",
    patient_name: "Samsul Alam",
    age: 45,
    gender: "Male",
    doctor_name: "Dr Ikhtiyār al-Dīn Muḥammad Bakhtiyār Khaljī ",
    admission_date: "2023-08-30",
  },
  {
    key: "4",
    bed_no: "C704",
    patient_name: "Rajiya Khatun",
    age: 37,
    gender: "Female",
    doctor_name: "Dr Iqbal Hossain",
    admission_date: "2023-12-21",
  },
  {
    key: "5",
    bed_no: "C705",
    patient_name: "Jobayer Hossain",
    age: 25,
    gender: "Male",
    doctor_name: "Dr Asadul Jaman",
    admission_date: "2022-03-25",
  },
];

const PatientTable = ({ props }) => {
  console.log(JSON.stringify(props, undefined, 2));

  const getRowClassName = (record) => {
    console.log("record", props.data[parseInt(record.key)]);
    if (props.data[parseInt(record.key) - 1].result === "c") {
      return "row-color-red";
    } else {
      return "row-color-white";
    }
  };
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        rowClassName={getRowClassName}
      />
    </div>
  );
};

export default PatientTable;
