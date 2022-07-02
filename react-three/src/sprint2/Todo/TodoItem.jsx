// import "App.css";
export default function TodoItem({
    id,
    title,
    status,
    handalToggle,
    handleDelet
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
          color:"white",
          backgroundColor:"#1877f2"
      
        }}
      >
        <div style={{width:"60%"}}>{title}</div>
        <div>{status ? "Done" : "Not Done"}</div>
        <button className="buttons" onClick={() => handalToggle(id)}>Toggale</button>
        <button className="buttons" onClick={() => handleDelet(id)}>Delet</button>
      </div>
    );
  }
  