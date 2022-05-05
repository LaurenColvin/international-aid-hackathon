const SearchPageCard = (props) => {
    return (
        <div className="flex justify-between content-center m-10 p-4 bg-success">
            <div className="flex content-center">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=92310" />
                    </div>
                </div>
                <div className="ml-3">
                    <h4 className="text-xl text-left m-3 text-white">School Name | Teacher's Name</h4>
                    <h4 className="text-xl text-left m-3 text-white" >Location</h4>
                </div>
            </div>
            <h4 className="text-xl m-7 text-white">25 items needed</h4>
        </div>
  );
};

export default SearchPageCard;
