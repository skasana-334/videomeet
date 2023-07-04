import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Room from "./Room";
function App() {
  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Home></Home>}/>
  <Route path="/room/:roomID" element={<Room></Room>}></Route>
  {/* room id is there because there can be multiple room */}
</Routes>
    </div>
  );
}

export default App;
