import {
  Navbar,
  AccueilBody,
  AgenceList,
  Profil,
  BrandList,
  ServicesList,
  AppointmentForm,
  Account,
  CarForm,
} from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/* <AppointmentForm/> */}
      {/* <Account/> */}

      <Routes>
        <Route path="/" element={<AccueilBody />} />
        <Route path="/agences" element={<AgenceList />} />
        <Route path="/services" element={<ServicesList />} />
        <Route path="/marques" element={<BrandList />} />
        <Route path="/appoint" element={<AppointmentForm />}></Route>
        <Route path="/Account" element={<Account />}>
          <Route path="" element={<Profil />}></Route>
          <Route path="appoint" element={<AppointmentForm />}></Route>
          <Route path="add" element={<CarForm />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
