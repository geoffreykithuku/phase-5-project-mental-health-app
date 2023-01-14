import "./App.css";
import CounsellorAppointments from "./components/CounsellorAppointments";
import CounsellorDashboard from "./components/CounsellorDashboard";
import EditAppointment from "./components/EditAppointment";
import Forms from "./components/Forms";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import NewAppointment from "./components/NewAppointment";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <>
      {/* <NavBar />
      <Hero />
      <Forms /> */}
      {/* <UserDashboard /> */}
      {/* <NewAppointment /> */}
      <CounsellorDashboard />
      <CounsellorAppointments />
      <EditAppointment />
    </>
  );
}

export default App;
