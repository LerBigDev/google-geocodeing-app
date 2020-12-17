import React from "react";
import { Route, useHistory } from "react-router-dom";
import { Switch } from "react-router-dom";
import GoogleMapPage from "./private/experiments/google-map";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <div>Welcome</div>
      <button onClick={() => history.push("/map")}>Go to map</button>
      <Switch>
        <Route path={"/map"}>
          <GoogleMapPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
