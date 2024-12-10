import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, taste, photo, supplier, category, details } = coffee;
  const handleDelete = _id => {
    console.log('Deleting', _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          })
        console.log('Deletion successful')
      }
    });
  }

  return (
    <div className="card bg-base-100 shadow-lg">
      <figure className="p-4">
        <img src={photo} alt={name} className="rounded-xl h-[300px] w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p className="text-sm text-gray-600">Quantity: {quantity}</p>
        <p className="text-sm">Category: {category}</p>
        <p className="text-sm">Taste: {taste}</p>
        <p className="text-sm">Supplier: {supplier}</p>
        <p className="text-sm">Details: {details}</p>
        <div className="card-actions">
          <button className="btn btn-sm btn-primary">View Details</button>
          <Link to={`/updateCoffee/${_id}`} className="btn btn-sm btn-secondary">Update Info</Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-error text-white">Delete Coffee</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;