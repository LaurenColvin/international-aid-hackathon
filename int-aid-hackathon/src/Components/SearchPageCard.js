import { Link } from "react"

const SearchPageCard = (teacher, id) => {
  console.log(teacher)

  return (
    <>
      <ul key={id}>
        <li>
          <h1>{teacher.name}</h1>
          <h2>{teacher.school}</h2>
          <h3>{teacher.country}</h3>
          <img src={teacher.user_img_url} alt={teacher.name}></img>
        </li>
      </ul>
      <Link to={`/search/${teacher.id}`}>
        <button>gimme stuff</button>
      </Link>
    </>
    // <div className="flex justify-between content-center m-10 p-4 bg-slate-200">
    //   <div className="flex content-center">
    //     <div className="avatar">
    //       <div className="w-24 rounded-full">
    //         <img src={teacher.user_img_url} alt={teacher.name} />
    //       </div>
    //     </div>
    //     <div className="ml-3">
    //       <h4 className="text-xl text-left m-3">
    //         {/* `{teacher.school}` | `{teacher.name}` */}
    //       </h4>
    //       <h4 className="text-xl text-left m-3">Location</h4>
    //     </div>
    //   </div>
    //   <h4 className="text-xl m-7">25 items needed</h4>
    //   <Link to={`/search/${teacher.id}`}>
    //     <button>gimme stuff</button>
    //   </Link>
    // </div>
  )
}

export default SearchPageCard
