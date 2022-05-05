import React from 'react'
//TODO: default image if !imgUrl
function TeacherAvatar({imgUrl}) {

  return (
    <div className="avatar">
  <div className="w-24 rounded-full">
    <img src="https://api.lorem.space/image/face?hash=92310" />
  </div>
</div>

  )
}

export default TeacherAvatar