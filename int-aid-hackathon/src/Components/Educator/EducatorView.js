import React from 'react'
import EducatorBody from './EducatorBody/EducatorBody'
import EducatorTop from './EducatorTop/EducatorTop'
  //mock user object shape for UI data reqs
  const user = {
    imgUrl: "https://api.lorem.space/image/face?hash=92310",
    schoolName: "string school",
    grade: 13,
    location: "string country",
  };

function EducatorView() {
  return (
    <>
    <EducatorTop user={user}/>
    <EducatorBody user={user}/>
    </>
  )
}

export default EducatorView