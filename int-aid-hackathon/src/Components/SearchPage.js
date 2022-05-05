import SearchPageCard from "./SearchPageCard"
import { dbClient } from "../services/dbClient"
import { useState, useEffect } from "react"

const SearchPage = (props) => {
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    const { data, error } = await dbClient.from("teacher_profiles").select()
    setAllPosts(data)
    console.log(allPosts)
  }

    const mappedPosts = allPosts.map((teacher, idx) => {
      console.log(teacher)
    return (
      <SearchPageCard teacher={teacher} id={idx}/>
      )
    })

  return (
    <div>
      <div className="hero min-h-full bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-xlg">
            <h1 className="text-4xl font-bold">
              WE HELP EDUCATORS AROUND THE <br /> GLOBE GET THE SUPPLIES THEY
              NEED
            </h1>
          </div>
        </div>
      </div>
      <h2 className="text-left mx-10">Filter By:</h2>
      <div className="flex justify-between">
        <div>
          <select className="select select-primary select-xs mx-10 max-w-xs">
            <option disabled selected>
              Location
            </option>
            <option>All</option>
            <option>USA</option>
            <option>Other</option>
            <option>Other</option>
            <option>Other</option>
          </select>

          <select className="select select-primary select-xs mx-10 max-w-xs">
            <option disabled selected>
              Age of Students
            </option>
            <option>All</option>
            <option>3-5 years</option>
            <option>6-10 years</option>
            <option>11-13 years</option>
            <option>14 +years</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="input input-xs input-bordered mx-10 max-w-xs"
        />
      </div>
      {allPosts.length !== 0 ? <>{mappedPosts}</> : <div></div>}
    </div>
  )
}

export default SearchPage
