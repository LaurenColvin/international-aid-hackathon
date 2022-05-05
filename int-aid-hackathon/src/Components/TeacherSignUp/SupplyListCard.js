const SupplyListCard = (props) => {
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>Quantity?</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">+</button>
                <button class="btn btn-primary">-</button>
                </div>
            </div>
        </div>
    )
}

export default SupplyListCard;