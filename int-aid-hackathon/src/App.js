import './App.css';
import { Route, Routes } from "react-router-dom";

import ScrollTop from './Components/ScrollTop/ScrollTop';
import Nav from './Components/Nav/Nav';
import LandingPage from './Components/LandingPage/LandingPage';
import CreateDonor from './Components/CreateDonor/CreateDonor';
import CreateTeacher from './Components/CreateTeacher/CreateTeacher';
import TeacherProfile from './Components/TeacherProfile/TeacherProfile';
import SearchPage from './Components/SearchPage/SearchPage';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <ScrollTop>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/create-donor" element={<CreateDonor/>} />
            <Route path="/create-teacher" element={<CreateTeacher/>} />
            <Route path="/teacher-profile" element={<TeacherProfile/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </ScrollTop>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
