import React from 'react'

function TeacherInfo({user}) {
  return (
    <div class="grid grid-cols-3 divide-x">
    <div className="text text-lg text-secondary">{user.schoolName}</div>

    <div className="text text-lg text-secondary">{user.grade}</div>
    <div className="text text-lg text-secondary">{user.location}</div>
  </div>
  )
}

export default TeacherInfo