import { Link } from "react-router-dom"

import CardWrapper from "../layout/CardWrapper"
import SupplyListCard from "./SupplyListCard"

const SupplyListPage = (props) => {
  return (
    <CardWrapper>
      <div>
        <div>
          <h1 className="text-2xl font-bold text-left p-5 ml-50">
            Creating Your Account
          </h1>
          <ul class="steps">
            <li class="step step-primary">
              Step 1 <br /> Educator Information
            </li>
            <li class="step step-primary">
              Step 2 <br /> School Information
            </li>
            <li class="step step-primary">
              Step 3 <br /> Upload Pictures
            </li>
            <li class="step step-primary">
              Step 4 <br /> Add Your Story
            </li>
            <li class="step step-primary">
              Step 5 <br /> Create Supply List
            </li>
            <li class="step">
              Step 6 <br /> Review and Complete
            </li>
          </ul>
          {/*TODO: BRING IN COMPONENT TREE */}
          <p className="text-2xl text-left p-5">
            Select the supplies you would like added to your list.
          </p>
          <div className="flex flex-wrap flex-row justify-evenly">
            {/* <SupplyListCard/> */}
            <div class="card card-compact w-96 bg-base-100 shadow-xl mb-3 flex">
              <figure>
                <img
                  src="https://cdn.discordapp.com/attachments/971825989174825001/971825992022757376/chalks_1.png"
                  alt="Chalk"
                  className="mt-5"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Chalk</h2>
                <p>Quantity?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">+</button>
                  <button class="btn btn-primary">-</button>
                </div>
              </div>
            </div>

            {/* card ends here */}
            {/* <SupplyListCard/> */}
            <div class="card card-compact w-96 bg-base-100 shadow-xl mb-3">
              <figure>
                <img
                  src="https://cdn.discordapp.com/attachments/971825989174825001/971826070326247434/marker_1.png"
                  alt="Marker"
                  className="mt-5"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Marker</h2>
                <p>Quantity?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">+</button>
                  <button class="btn btn-primary">-</button>
                </div>
              </div>
            </div>
            {/* card ends here */}
            {/* <SupplyListCard/> */}
            <div class="card card-compact w-96 bg-base-100 shadow-xl mb-3">
              <figure>
                <img
                  src="https://cdn.discordapp.com/attachments/971825989174825001/971826027175235684/3209428_book_manual_notebook_page_portfolio_icon.png"
                  alt="Notebook"
                  className="mt-5"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Notebook</h2>
                <p>Quantity?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">+</button>
                  <button class="btn btn-primary">-</button>
                </div>
              </div>
            </div>
            {/* card ends here */}
            {/* <SupplyListCard/> */}
            <div class="card card-compact w-96 bg-base-100 shadow-xl mb-3">
              <figure>
                <img
                  src="https://cdn.discordapp.com/attachments/971825989174825001/971826027460431952/4544807_business_calculator_comerce_delivery_shop_icon.png"
                  alt="Calculator"
                  className="mt-5"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Calculator</h2>
                <p>Quantity?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">+</button>
                  <button class="btn btn-primary">-</button>
                </div>
              </div>



            </div>
            {/* card ends here */}
            {/* <SupplyListCard/> */}
            <div class="card card-compact w-96 bg-base-100 shadow-xl mb-3">
              <figure>
                <img
                  src="https://cdn.discordapp.com/attachments/971825989174825001/971826026940362853/296913_ruler_design_icon_1.png"
                  alt="Ruler"
                  className="mt-5"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Ruler</h2>
                <p>Quantity?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">+</button>
                  <button class="btn btn-primary">-</button>
                </div>
              </div>
            </div>
            {/* card ends here */}
            {/* <SupplyListCard/> */}
            <div class="card card-compact w-96 bg-base-100 shadow-xl mb-3">
              <figure>
                <img
                  src="https://cdn.discordapp.com/attachments/971825989174825001/971826026151804988/290135_pen_pencil_write_icon.png"
                  alt="Pencil"
                  className="mt-5"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Pencil</h2>
                <p>Quantity?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">+</button>
                  <button class="btn btn-primary">-</button>
                </div>
              </div>
            </div>
            {/* card ends here */}
            {/* <SupplyListCard/> */}
            <div class="card card-compact w-96 bg-base-100 shadow-xl mb-3">
              <figure>
                <img
                  src="https://cdn.discordapp.com/attachments/971825989174825001/971826025870798919/185045_pen_icon.png"
                  alt="Pen"
                  className="mt-5"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Pen</h2>
                <p>Quantity?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">+</button>
                  <button class="btn btn-primary">-</button>
                </div>
              </div>
            </div>
            {/* card ends here */}
            {/* <SupplyListCard/> */}
            <div class="card card-compact w-96 bg-base-100 shadow-xl mb-3">
              <figure>
                <img
                  src="https://cdn.discordapp.com/attachments/971825989174825001/971825992584802314/crayon_1.png"
                  alt="Crayon"
                  className="mt-5"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Crayon</h2>
                <p>Quantity?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">+</button>
                  <button class="btn btn-primary">-</button>
                </div>
              </div>
            </div>
            {/* card ends here */}
            {/* <SupplyListCard/> */}
            <div class="card card-compact w-96 bg-base-100 shadow-xl mb-3">
              <figure>
                <img
                  src="https://cdn.discordapp.com/attachments/971825989174825001/971825992375103518/colored-pencils_1.png"
                  alt="Colored pencils"
                  className="mt-5"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Colored Pencils</h2>
                <p>Quantity?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">+</button>
                  <button class="btn btn-primary">-</button>
                </div>
              </div>
            </div>
            {/* card ends here */}
            {/* <SupplyListCard/> */}
            <div class="card card-compact w-96 bg-base-100 shadow-xl mb-3">
              <figure>
                <img
                  src="https://cdn.discordapp.com/attachments/971825989174825001/971826026940362853/296913_ruler_design_icon_1.png"
                  alt="Ruler"
                  className="mt-5"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Ruler</h2>
                <p>Quantity?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">+</button>
                  <button class="btn btn-primary">-</button>
                </div>
              </div>
            </div>
            {/* card ends here */}
            {/* <SupplyListCard/> */}
            <div class="card card-compact w-96 bg-base-100 shadow-xl mb-3">
              <figure>
                <img
                  src="https://cdn.discordapp.com/attachments/971825989174825001/971826070670147634/pencil-case_1.png"
                  alt="Pencil Case"
                  className="mt-5"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Pencil Case</h2>
                <p>Quantity?</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">+</button>
                  <button class="btn btn-primary">-</button>
                </div>
              </div>
            </div>
            {/* card ends here */}
          </div>
          {/* <div class="artboard phone-6 border-black border-2 bg-slate-200 mt-10">
            <h2>Your List</h2>
          </div> */}
        </div>

        {/* TODO: bring form to center */}
        <div className="create-user-buttons">
          <Link className="link" to="/story">
            <button className="btn  btn-primary">Back</button>
          </Link>
          <Link className="link" to="/sign-up/confirm">
            <button className="btn btn-primary">Next</button>
          </Link>
        </div>
      </div>
    </CardWrapper>
  )
}

export default SupplyListPage
