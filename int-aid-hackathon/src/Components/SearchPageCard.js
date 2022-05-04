const SearchPageCard = (props) => {
    return (
        <div className="flex justify-between content-center m-10 p-4 bg-slate-200">
            <div className="flex content-center">
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=92310" />
                    </div>
                </div>
                <div className="ml-3">
                    <h4 className="text-xl text-left m-3">School Name | Teacher's Name</h4>
                    <h4 className="text-xl text-left m-3" >Location</h4>
                </div>
            </div>
            <h4 className="text-xl m-7">25 items needed</h4>
        </div>
    )
}

export default SearchPageCard;