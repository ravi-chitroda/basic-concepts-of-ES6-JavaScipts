import "./App.css";
import ObjectAdd from "./object/ObjectAdd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ObjectDelete from "./object/ObjectDelete";
import Array from "./array/Array";
import Ofobject from "./array/Arrayofobject";
import String from "./string/String";


function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ObjectAdd />} />
        <Route path="/object" element={<ObjectDelete />} />
        <Route path="/array" element={<Array />} />
        <Route path="/ofobject" element={<Ofobject />} />
        <Route path="/string" element ={<String />} />

      </Routes>
    </BrowserRouter>
    
  </div>;
}

export default App;
