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
          <p>Quantity?</p>
          <div class="card-actions justify-end">
            <input type="number"></input>
          </div>
        </div>
      </div>
    )
  })
  return <>{allSupplies}</>
}

export default SupplyListCard
