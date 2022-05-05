import { Link } from "react-router-dom";

const SearchPageCard = (props) => {
    return (
        <div>
            <Link to="/educator"><div className="flex justify-between content-center m-10 p-4 bg-success">
                <div className="flex content-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://cdn.discordapp.com/attachments/971825989174825001/971894449695244288/Ellipse_20.png" />
                        </div>
                    </div>
                    <div className="ml-3">
                        <h4 className="text-xl text-left m-3 text-white">Hands to Help | Susan Monterrey</h4>
                        <h4 className="text-xl text-left m-3 text-white" >Eastern Cambodia</h4>
                    </div>
                </div>
                <h4 className="text-xl m-7 text-white">25 items needed</h4>
            </div>
            </Link>
            <Link to="/educator">
            <div className="flex justify-between content-center m-10 p-4 bg-success">
            <div className="flex content-center">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://cdn.discordapp.com/attachments/971825989174825001/971894449921753088/Ellipse_19.png" />
                    </div>
                </div>
                <div className="ml-3">
                    <h4 className="text-xl text-left m-3 text-white">Grodnick Learning Center | Jim Bartlett</h4>
                    <h4 className="text-xl text-left m-3 text-white" >Dublin, Ireland</h4>
                </div>
            </div>
            <h4 className="text-xl m-7 text-white">25 items needed</h4>
        </div>
        </Link>
        <Link to="/educator">
        <div className="flex justify-between content-center m-10 p-4 bg-success">
                <div className="flex content-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://cdn.discordapp.com/attachments/971825989174825001/971894450139848725/Ellipse_18.png" />
                        </div>
                    </div>
                    <div className="ml-3">
                        <h4 className="text-xl text-left m-3 text-white">School for the Future | Elizabeth O'Connel</h4>
                        <h4 className="text-xl text-left m-3 text-white" >Nairobi, Kenya</h4>
                    </div>
                </div>
                <h4 className="text-xl m-7 text-white">25 items needed</h4>
            </div>
            </Link>
            <Link to="/educator">
            <div className="flex justify-between content-center m-10 p-4 bg-success">
            <div className="flex content-center">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://cdn.discordapp.com/attachments/971825989174825001/971894450374733964/Ellipse_17.png" />
                    </div>
                </div>
                <div className="ml-3">
                    <h4 className="text-xl text-left m-3 text-white">Sunshine Academy | Lauren Kim</h4>
                    <h4 className="text-xl text-left m-3 text-white" >Nairobi, Kenya</h4>
                </div>
            </div>
            <h4 className="text-xl m-7 text-white">25 items needed</h4>
        </div>
        </Link>
        </div>
  );
};

export default SearchPageCard;
