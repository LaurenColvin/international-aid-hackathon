import './App.css';
import { Route, Routes } from "react-router-dom";

import ScrollTop from './Components/ScrollTop/ScrollTop';
import Nav from './Components/Nav/Nav';
import SignUp from './Components/SignUp';
import LoginModal from './Components/LoginModal'
import LandingPage from './Components/LandingPage';
import CreateDonor from './Components/CreateDonor';
import CreateTeacher from './Components/TeacherSignUp/CreateTeacher';
import DetailPage from './Components/TeacherSignUp/Details';
import NamePage from './Components/TeacherSignUp/Name';
import SchoolPage from './Components/TeacherSignUp/School';
import PhotosPage from './Components/TeacherSignUp/Photos';
import StoryPage from './Components/TeacherSignUp/Story';
import SupplyListPage from './Components/TeacherSignUp/SupplyList';
import TeacherProfile from './Components/TeacherProfile';
import SearchPage from './Components/SearchPage';
import About from './Components/About';
import Footer from './Components/Footer/Footer';
import EducatorView from './Components/Educator/EducatorView';
import Foundation from './Components/layout/Foundation';

function App() {
  return (
    <div className="App">
      <Nav/>
<Foundation>
        <ScrollTop>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/login" element={<LoginModal/>} />
            <Route path="/create-donor" element={<CreateDonor/>} />
            <Route path="/create-teacher" element={<CreateTeacher/>} />
            <Route path="/details" element={<DetailPage/>} />
            <Route path="/name" element={<NamePage/>} />
            <Route path="/school" element={<SchoolPage/>} />
            <Route path="/photos" element={<PhotosPage/>} />
            <Route path="/story" element={<StoryPage/>} />
            <Route path="/supply-list" element={<SupplyListPage/>} />
            <Route path="/teacher-profile" element={<TeacherProfile/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/educator" element={<EducatorView/>} />
          </Routes>
        </ScrollTop>
   
      {/* <Footer/> */}
      </Foundation>
    </div>
  );
}

export default App;
