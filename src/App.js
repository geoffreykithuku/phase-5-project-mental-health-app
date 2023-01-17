import Forms from "./components/PatientForms";

import NavBar from "./components/NavBar";
import ConsellorForms from "./components/ConsellorForms";
import UserDoctorCheck from "./components/UserDoctorCheck";
import EditAppointment from "./components/EditAppointment";
import CounsellorAppointments from "./components/CounsellorAppointments";
import CounsellorDashboard from "./components/CounsellorDashboard";
import UserDashboard from "./components/UserDashboard";
import Hero from "./components/Hero";
import PatientForms from "./components/PatientForms";
import { Route, Routes } from "react-router-dom";
import NewAppointment from "./components/NewAppointment";
import About from "./components/About"


function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/check" element={<UserDoctorCheck />} />
        <Route path="/docforms" element={<ConsellorForms />} />
        <Route path="/patientforms" element={<PatientForms />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/userdashboard/new" element={<NewAppointment />} />
        <Route path="/userdashboard/id" element={<UserDashboard />} />

        <Route path="/counsellordashboard" element={<CounsellorDashboard />} />
        <Route path="/counsellordashboard/:id" element={<EditAppointment />} />
      </Routes>
     
    </>
  );
}

export default App;
