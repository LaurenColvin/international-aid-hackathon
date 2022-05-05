import React from "react";
import EducatorBody from "./EducatorBody/EducatorBody";
import EducatorTop from "./EducatorTop/EducatorTop";
import { useState, useEffect } from "react";
import { dbClient } from "../../services/dbClient"
//mock user object shape for UI data reqs
const user = {
  //TODO: TEACHER ID FROM PARAMS
  imgUrl: "https://api.lorem.space/image/face?hash=92310",
  schoolName: "string school",
  grade: 13,
  location: "string country",
};

const fakeParam = 3

const EducatorView = (props) => {

  const [teacherDetails, setTeacherDetails] = useState([])

  useEffect(() => {
    getTeacher()
  }, [])

  const getTeacher = async () => {
    const { data, error } = await dbClient.from("teacher_profiles").select('id').match({id:3})
    setTeacherDetails(data)
  }

  console.log(teacherDetails)

 
  return (
    <div className="w-full h-[95vh]">
      <EducatorTop user={user} />
      <EducatorBody user={user} />
    </div>
  );

}

export default EducatorView;
