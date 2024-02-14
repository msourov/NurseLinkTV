import "./App.css";
import PatientTable from "./Table";
import { Layout } from "antd";
import TableHeader from "./TableHeader";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://api.demo2.hidayahsmart.solutions/v1/margaret/remote/call/all"
      );
      if (res.status === 200) {
        setData(res.data);
      }
    };
    setInterval(fetchData, 3000);
  }, []);

  return (
    <>
      <Layout style={{ width: "70vw" }}>
        <TableHeader style={{ width: "100%", maxWidth: "100vw" }} />
        {data && <PatientTable props={data} />}
      </Layout>
    </>
  );
}

export default App;
