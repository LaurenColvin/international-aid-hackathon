import TeacherAvatar from "./TeacherAvatar";
import React from "react";
import TeacherInfo from "./TeacherInfo";
import EducatorCarousel from "./EducatorCarousel";
  //mock user object shape for UI data reqs
const user = {
  imgUrl: "https://api.lorem.space/image/face?hash=92310",
  schoolName: "string school",
  grade: 13,
  location: "string country",
};

function EducatorTop({}) {


  return (
    <div className="w-full mt-10 bg-black flex flex-row p-4 justify-between items-stretch">
      <section className="items-start pl-3 w-[30vw]">
        <TeacherAvatar imgUrl={user.imgUrl} />
        <div className="text text-lg text-cyan-300 ">Teacher Name</div>
        <TeacherInfo user={user}/>
      </section>
      <section className="pr-3 pt-3 w-[60vw]">
          <EducatorCarousel/>
          <p className="text text-primary text-xl text-center">
              This is a caption? 
          </p>
      </section>
    </div>
  );
}

export default EducatorTop;
