import { Header } from "antd/es/layout/layout";

const TableHeader = () => {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const currentDateFormatted = currentDate.toLocaleDateString();

  return (
    <Header
      style={{
        backgroundColor: "grey",
      }}
    >
      <div
        className="header"
        style={{
          maxHeight: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            display: "flex",
            marginBlock: "auto",
            justifyContent: "center",
            flexDirection: "column",
            lineHeight: 2,
          }}
        >
          <div>{currentTime}</div>
          <div> {currentDateFormatted}</div>
        </div>
        <div>
          <p
            style={{ fontWeight: "bold", fontSize: "2em", marginBlock: "auto" }}
          >
            Transworld Medical Center
          </p>
        </div>
        <div
          style={{
            width: "15%",
            marginBlock: "0",
            display: "flex",
            alignItems: "center",
            marginBlock: "auto",
          }}
        >
          <img
            src="./NurseCare.png"
            style={{
              width: "80px",
            }}
          />
        </div>
      </div>
    </Header>
  );
};

export default TableHeader;
