import React from "react";

function TeacherInfo({ user }) {
  return (
    <div class="grid grid-cols-3 divide-x">
      <div className="text text-lg text-secondary">School Name</div>

      <div className="text text-lg text-secondary">Student's Age</div>
      <div className="text text-lg text-secondary">Kenya</div>
    </div>
  );
}

export default TeacherInfo;
