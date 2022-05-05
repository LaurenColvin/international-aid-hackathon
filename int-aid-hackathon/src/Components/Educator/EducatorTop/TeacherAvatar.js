import React from "react";
//TODO: default image if !imgUrl
function TeacherAvatar({ imgUrl }) {
  //TODO: img alt prop
  return (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <img src={imgUrl} />
      </div>
    </div>
  );
}

export default TeacherAvatar;
