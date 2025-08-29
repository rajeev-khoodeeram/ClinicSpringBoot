import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import DoctorList from './components/doctors/DoctorList'
import Layout from './components/Layout';

function App() {
  

  return (
    <>
       <BrowserRouter>
      <Layout>
        <Routes>
          
          <Route path="/doctors" element={<DoctorList />} />
          
        </Routes>
      </Layout>
    </BrowserRouter>
  
    </>
    
  )
  
}

export default App
