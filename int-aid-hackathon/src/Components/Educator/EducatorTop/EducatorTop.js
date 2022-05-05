import TeacherAvatar from "./TeacherAvatar";
import React from "react";
import TeacherInfo from "./TeacherInfo";
import EducatorCarousel from "./EducatorCarousel";

function EducatorTop({ user }) {
  //TODO: FIX NAVBAR AND REMOVE MT-10
  //TODO: height in vh with breakpoints, make a parent Educator component for position reference and handling responsiveness
  return (
    <div className="w-full mt-10 bg-warning flex flex-row p-4 justify-between items-stretch">
      <section className="items-start pl-3 ml-20 w-[30vw]">
        <TeacherAvatar imgUrl={user.imgUrl} />
        <div className="text text-4xl text-black ">Becca Rogers</div>
        <TeacherInfo user={user} />
      </section>
      <section className="pr-3 pt-3 w-[60vw]">
        <EducatorCarousel />
      </section>
    </div>
  );
}

export default EducatorTop;
