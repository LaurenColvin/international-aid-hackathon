import React from "react";
//TODO: default image if !imgUrl
function TeacherAvatar({ imgUrl }) {
  //TODO: img alt prop
  return (
    <div className="avatar">
      <div className="w-48 rounded-full">
        <img src="https://cdn.discordapp.com/attachments/971825989174825001/971873978153050162/Mask_group.png" />
      </div>
    </div>
  );
}

export default TeacherAvatar;
