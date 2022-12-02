import AddStudent from './components/AddStudent';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AllStudents from './components/AllStudents';

function App() {
  return (

    <>
     
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/add" exact element={<AddStudent />} />
          <Route path="/" exact element={<AllStudents/>} />
        </Routes>

      </BrowserRouter>
    </div>
    </>
    
  );
}

export default App;
