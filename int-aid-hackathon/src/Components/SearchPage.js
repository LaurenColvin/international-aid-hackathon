import SearchPageCard from "./SearchPageCard";

const SearchPage = (props) => {
    return (
        <div>
            <div className="hero min-h-full bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-xlg">
                    <h1 className="text-4xl font-bold">WE HELP EDUCATORS AROUND THE <br/> GLOBE GET THE SUPPLIES THEY NEED</h1>
                    </div>
                </div>
            </div>
            <h2 className="text-left mx-10">Filter By:</h2>
            <div className="flex justify-between">
                <div>
                    <select class="select select-primary select-xs mx-10 max-w-xs">
                        <option disabled selected>Location</option>
                        <option>All</option>
                        <option>USA</option>
                        <option>Other</option>
                        <option>Other</option>
                        <option>Other</option>
                    </select>
                    <select class="select select-primary select-xs mx-10 max-w-xs">
                        <option disabled selected>Age of Students</option>
                        <option>All</option>
                        <option>3-5 years</option>
                        <option>6-10 years</option>
                        <option>11-13 years</option>
                        <option>14 +years</option>
                    </select>
                </div>
                <input type="text" placeholder="Search" className="input input-xs input-bordered mx-10 max-w-xs"/>
            </div>
            <SearchPageCard/>
        </div>
    )
}

export default SearchPage;