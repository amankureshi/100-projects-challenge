import "./app.css";

export function App() {
  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    "=",
    "c",
    ".",
  ];
  return (
    <>
      <h1>Aman Kureshi</h1>
      <form>
        <input type="text" />
      </form>
      <div className="form-container">
        {arr.map((item, idx) => (
          <button key={idx} id={item}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
