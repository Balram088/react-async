// import "App.css";
export default function TodoItem({
  id,
  title,
  status,
  handalToggle,
  handleDelet,
}) {
  return (
    <div
      style={{
        padding: "20px",
        border: "5px solid white",
        borderRadius: "20px",
        display: "flex",
        gap: "20px",
        fontSize: "20px",
        width: "50%",
        marginLeft: "22%",
        color: "white",
        backgroundColor: "#1877f2",
      }}
    >
      <button className="buttons1" onClick={() => handalToggle(id)}>
        {status ? "✔" : "✕"}
      </button>
      <div style={{ width: "80%" }}>{title}</div>
      <button className="buttons" onClick={() => handleDelet(id)}>
        Delet
      </button>
    </div>
  );
}
