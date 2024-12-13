import { IoMdRefresh } from "react-icons/io";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    if (counter === 0) {
      return 0;
    } else {
      setCounter(counter - 1);
    }
  };
  const reseteClick = () => {
    setCounter(counter === 0);
    window.location.reload();
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <div className="right">
            <IoMdRefresh onClick={reseteClick} />
          </div>
          <div className="total_amount_card">
            <div className="card_text">
              <div className="total_amount_heading">{counter}</div>
            </div>
          </div>
          <form>
            <div className="btn_collection">
              <Stack spacing={2} direction="row">
                <Button
                  onClick={handleClick1}
                  variant="contained"
                  className="btn_one"
                >
                  <FaPlus />
                </Button>
                <Button
                  onClick={handleClick2}
                  variant="contained"
                  className="btn_two"
                >
                  <FaMinus />
                </Button>
              </Stack>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
