import "./App.css";
import PatientTable from "./Table";
import { Layout } from "antd";
import TableHeader from "./TableHeader";

function App() {
  return (
    <>
      <Layout style={{ width: "70vw" }}>
        <TableHeader style={{ width: "100%", maxWidth: "100vw" }} />
        <PatientTable props={{ id: ["C702", "C703"] }} />
      </Layout>
    </>
  );
}

export default App;
