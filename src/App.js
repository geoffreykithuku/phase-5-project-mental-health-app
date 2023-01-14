import "./App.css";

import Forms from "./components/PatientForms";

import NavBar from "./components/NavBar";
import ConsellorForms from "./components/ConsellorForms";
import UserDoctorCheck from "./components/UserDoctorCheck";
import EditAppointment from "./components/EditAppointment";
import CounsellorAppointments from "./components/CounsellorAppointments";
import CounsellorDashboard from "./components/CounsellorDashboard";
import NewAppointment from "./components/NewAppointment";
import UserDashboard from "./components/UserDashboard";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Forms />
      <ConsellorForms />
      <UserDashboard />
       <NewAppointment />
      <CounsellorDashboard />
      <CounsellorAppointments />
      <EditAppointment />
      <UserDoctorCheck />
    </>
  );
}

export default App;
