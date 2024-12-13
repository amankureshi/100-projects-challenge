import { IoIosRefresh } from "react-icons/io";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <div className="total_amount_card">
            <div className="right">
              <IoIosRefresh />
            </div>
            <div className="card_text">
              <div className="total_amount_heading">1</div>
            </div>
          </div>
          <form>
            <div className="btn_collection">
              <Stack spacing={2} direction="row">
                <Button variant="contained" className="btn_one">
                  +
                </Button>
                <Button variant="contained" className="btn_two">
                  -
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
