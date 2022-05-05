import SearchPageCard from "./SearchPageCard";

const SearchPage = (props) => {
    return (
        <div>
            <div className="hero-image min-h-full h-64 flex content-center justify-center">
                <div className="hero-content text-center">
                    <div className="max-w-xlg">
                        <h1 className="text-4xl font-bold text-white">WE HELP EDUCATORS AROUND THE <br/> GLOBE GET THE SUPPLIES THEY NEED</h1>
                    </div>
                </div>
            </div>
            <h2 className="text-left my-5 mx-10">Filter By:</h2>
            <div className="flex justify-between">
                <div>
                    <select className="select select-primary select-xs mx-10 max-w-xs">
                        <option disabled selected>Location</option>
                        <option>All</option>
                        <option>USA</option>
                        <option>Other</option>
                        <option>Other</option>
                        <option>Other</option>
                    </select>
                    <select className="select select-primary select-xs mx-10 max-w-xs">
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
            <SearchPageCard/>
            <SearchPageCard/>

        </div>
  );
};

export default SearchPage;
