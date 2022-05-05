import React from "react";
import WishItemCard from "./WishItemCard";
const itemArray = [
  {
    name: "Pencils",
    numberNeeded: 7,
    imgUrl: "https://cdn.discordapp.com/attachments/971825989174825001/971826026151804988/290135_pen_pencil_write_icon.png",
  },
  {
    name: "Pens",
    numberNeeded: 3,
    imgUrl:
      "https://cdn.discordapp.com/attachments/971825989174825001/971826025870798919/185045_pen_icon.png",
  },
  {
    name: "Notebooks",
    numberNeeded: 2,
    imgUrl:
      "https://cdn.discordapp.com/attachments/971825989174825001/971826027175235684/3209428_book_manual_notebook_page_portfolio_icon.png",
  },
  {
    name: "Binders",
    numberNeeded: 7,
    imgUrl:
      "https://cdn.discordapp.com/attachments/971825989174825001/971826027812765726/7124329_paper_scripture_binder_books_book_icon.png",
  },
  {
    name: "Lined Paper",
    numberNeeded: 7,
    imgUrl:
      "https://cdn.discordapp.com/attachments/971825989174825001/971826026701275166/290138_document_extension_file_format_paper_icon.png",
  },
  {
    name: "Calculators",
    numberNeeded: 7,
    imgUrl:
      "https://cdn.discordapp.com/attachments/971825989174825001/971826027460431952/4544807_business_calculator_comerce_delivery_shop_icon.png",
  },
  {
    name: "Pencil Bags",
    numberNeeded: 7,
    imgUrl:
      "https://cdn.discordapp.com/attachments/971825989174825001/971826070670147634/pencil-case_1.png",
  },
  {
    name: "Markers",
    numberNeeded: 7,
    imgUrl:
      "https://cdn.discordapp.com/attachments/971825989174825001/971826070326247434/marker_1.png",
  },
  {
    name: "Rulers",
    numberNeeded: 7,
    imgUrl:
      "https://cdn.discordapp.com/attachments/971825989174825001/971826026940362853/296913_ruler_design_icon_1.png",
  },
  {
    name: "Chalk",
    numberNeeded: 7,
    imgUrl:
      "https://cdn.discordapp.com/attachments/971825989174825001/971825992022757376/chalks_1.png",
  },
];
//TODO: DATA REQUIREMENTS: ITEM (NAME, NUMBER NEEDED, IMGURL)
function EducatorBody() {
  return (
    <div className="">
      <section className="flex flex-wrap  m-20">
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
