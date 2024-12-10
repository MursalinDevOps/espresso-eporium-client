import Swal from "sweetalert2";
import Navbar from "../Navbar";

const AddCoffee = () => {

  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    // const quantityNum = parseInt(quantity)
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    // create an object
    const addCoffeeFormData = {name, quantity, supplier, taste, category, details, photo};
    console.log(addCoffeeFormData);
    // Swal.fire({
    //   title: "Good job!",
    //   text: "Coffee Added Successfully!",
    //   icon: "success"
    // });

    // send data to the server side
    fetch('http://localhost:5000/coffee', {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(addCoffeeFormData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title:"Success!",
          text:"Added to the Successfully :)",
          icon:"success"
        })
      }
    })
  }

    return (
        <div>
<nav>
    <Navbar></Navbar>
</nav>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-[#F4F3F0] p-8 rounded-lg shadow-lg w-full max-w-4xl">
          {/* Back to home link */}
          <div className="mb-4">
            <a href="/" className="text-blue-500 hover:underline">
              &larr; Back to home
            </a>
          </div>
  
          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Add New Coffee
          </h1>
  
          {/* Form */}
          <form onSubmit={handleAddCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input input-bordered w-full"
                />
              </div>
  
              {/* Quantity */}
              <div>
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="Enter coffee chef"
                  className="input input-bordered w-full"
                />
              </div>
  
              {/* Supplier */}
              <div>
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered w-full"
                />
              </div>
  
              {/* Taste */}
              <div>
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="input input-bordered w-full"
                />
              </div>
  
              {/* Category */}
              <div>
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input input-bordered w-full"
                />
              </div>
  
              {/* Details */}
              <div>
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input input-bordered w-full"
                />
              </div>
  
              {/* Photo */}
              <div className="md:col-span-2">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
  
            {/* Submit button */}
            <div className="mt-6 text-center">
              <button type="submit" className="btn bg-[#D2B48C] w-full">
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
        </div>
    );
};

export default AddCoffee;