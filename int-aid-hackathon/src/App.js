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
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import EducatorView from './Components/Educator/EducatorView';
import Foundation from './Components/layout/Foundation';
import Confirm from './Components/TeacherSignUp/Confirm';

function App() {
  return (
    <div className="App">
      <Nav/>
<Foundation>
        <ScrollTop>
          <Routes>
            
            <Route path="/" element={<LandingPage/>} />
            

         
            <Route path="/login" element={<LoginModal/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/create-donor" element={<CreateDonor/>} />
            <Route path="sign-up/create-teacher/" element={<CreateTeacher/>} />
            <Route path="/sign-up/details" element={<DetailPage/>} />

            <Route path="/sign-up/1" element={<NamePage/>} />
            <Route path="/sign-up/2" element={<SchoolPage/>} />
            <Route path="/sign-up/3" element={<PhotosPage/>} />
            <Route path="/sign-up/4" element={<StoryPage/>} />
            <Route path="/sign-up/5" element={<SupplyListPage/>} />
            <Route path="/sign-up/confirm" element={<Confirm/>} />

            <Route path="/search" element={<SearchPage/>} />
            <Route path="/teacher-profile" element={<TeacherProfile/>} />
            {/*<Route path="/search/:id" element={<SchoolPage/>} /> */}
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
