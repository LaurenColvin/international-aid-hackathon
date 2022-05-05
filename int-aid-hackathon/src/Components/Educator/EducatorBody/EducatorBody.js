import React from "react";
import WishItemCard from "./WishItemCard";
const itemArray = [
  {
    name: "pencils",
    numberNeeded: 7,
    imgUrl: "https://www.businesssourceproducts.com/images/650/DIX13882.jpg",
  },
  {
    name: "pens",
    numberNeeded: 3,
    imgUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2021/09/pens-2048px-6470.jpg",
  },
  {
    name: "notebooks",
    numberNeeded: 2,
    imgUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2021/09/pens-2048px-6470.jpg",
  },
  {
    name: "thingsdso",
    numberNeeded: 7,
    imgUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2021/09/pens-2048px-6470.jpg",
  },
  {
    name: "binders",
    numberNeeded: 7,
    imgUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2021/09/pens-2048px-6470.jpg",
  },
  {
    name: "stuff",
    numberNeeded: 7,
    imgUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2021/09/pens-2048px-6470.jpg",
  },
  {
    name: "ee",
    numberNeeded: 4,
    imgUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2021/09/pens-2048px-6470.jpg",
  },
  {
    name: "waaa",
    numberNeeded: 2,
    imgUrl:
      "https://cdn.thewirecutter.com/wp-content/media/2021/09/pens-2048px-6470.jpg",
  },
  {
    name: "werrrro",
    numberNeeded: 1,
    imgUrl: "https://m.media-amazon.com/images/I/31VXrrSQpIL._AC_.jpg",
  },
];
//TODO: DATA REQUIREMENTS: ITEM (NAME, NUMBER NEEDED, IMGURL)
function EducatorBody() {
  return (
    <div className="">
      <section className="grid grid-cols-3 grid-rows-3">
        {itemArray &&
          itemArray.map((thing) => {
            return (
              <div>
                <WishItemCard thing={thing} />
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default EducatorBody;
