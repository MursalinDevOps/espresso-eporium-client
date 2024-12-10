const CoffeeCard = ({coffee}) => {
    const {name, quantity, taste, photo} = coffee
        return (
        <div className="card bg-base-100 shadow-lg">
        <figure className="p-4">
          <img src={photo} alt={name} className="rounded-xl h-[300px] w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p className="text-sm text-gray-600">Quantity: {quantity}</p>
          <p className="text-sm font-bold">Taste: {taste} Taka</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-outline btn-warning">✏️</button>
            <button className="btn btn-sm btn-outline btn-error">🗑️</button>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;