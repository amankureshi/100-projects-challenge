import { IoMdRefresh } from "react-icons/io";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="app">
        <div className="container">
          <div className="right">
            <IoMdRefresh onClick={() => setCounter(0)} />
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
                  onClick={() => setCounter(counter + 1)}
                  variant="contained"
                  className="btn_one"
                  size="large"
                >
                  <FaPlus />
                </Button>
                <Button
                  disabled={counter == 0}
                  onClick={() => setCounter(counter - 1)}
                  variant="contained"
                  className="btn_two"
                  size="large"
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
