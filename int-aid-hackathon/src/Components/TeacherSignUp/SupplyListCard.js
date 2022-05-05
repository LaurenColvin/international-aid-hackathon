import SupplyList from "./SupplyList"

const SupplyListCard = (supplies) => {
  const allSupplies = supplies.supplies.map((supply) => {
    console.log("SUPPLIES", supply)

    return (
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <div key={supply.id}>
          <figure>
            <img src={supply.img_url} alt={supply.name} class="relative" />
          </figure>
        </div>
        <div class="card-body">
          <h2 class="card-title">{supply.name}</h2>
          {/* <p>Quantity?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">+</button>
            <button class="btn btn-primary">-</button>
          </div> */}
          <div className="mt-6">
            <a
              href={supply.href}
              className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
            >
              Add to bag<span className="sr-only">, {supply.name}</span>
            </a>
          </div>
        </div>
      </div>
    )
  })
  return <>{allSupplies}</>
}

export default SupplyListCard
