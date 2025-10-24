import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import DoctorList from './components/doctors/DoctorList'
import Layout from './components/Layout';
import DoctorForm from "./components/doctors/DoctorCreate";
import Dashboard from "./components/Dashboard";
function App() {
  

  return (
    <>
       <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/doctors/create" element={<DoctorForm />} />
          <Route path="/doctors/edit/:id" element={<DoctorForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  
    </>
    
  )
  
}

export default App
