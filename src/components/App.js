import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Users from "./Users";
import { loadUsers } from "../redux/actions";
import Todos from "./Todos";
import { Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers())
  }, []);
  return (
    <Route path="/:id?">
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Users/>
          </div>
          <div className="col">
            <Todos/>
          </div>
        </div>
      </div>
    </div>
    </Route>
  );
}

export default App;
