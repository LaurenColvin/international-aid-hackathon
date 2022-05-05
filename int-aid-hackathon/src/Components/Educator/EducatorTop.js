import TeacherAvatar from "./TeacherAvatar";
import React from "react";
import TeacherInfo from "./TeacherInfo";

const user = {
  imgUrl: "https://api.lorem.space/image/face?hash=92310",
  schoolName: "string school",
  grade: 13,
  location: "string country",
};

function EducatorTop({}) {
  //mock user object shape for UI data reqs

  return (
    <div className="w-full mt-10 bg-black flex flex-col p-4 ">
      <section className="items-start pl-3 w-[30vw]">
        <TeacherAvatar imgUrl={user.imgUrl} />
        <div className="text text-lg text-cyan-300 ">Teacher Name</div>
        <TeacherInfo user={user}/>
      </section>
    </div>
  );
}

export default EducatorTop;
