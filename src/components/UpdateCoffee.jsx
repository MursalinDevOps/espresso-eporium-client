import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const loadedData = useLoaderData();
  console.log(loadedData)
  // console.log(loadedData);
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    // create an object
    const updatedCoffee = {name, quantity, supplier, taste, category, details, photo};
    // console.log(updatedCoffee);

     // send data to the server side
     fetch(`http://localhost:5000/coffee/${loadedData._id}`, {
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(updatedCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount){
        Swal.fire({
          title:"Success!",
          text:"Coffee Updated Successfully :)",
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
            <div className="flex justify-center items-center min-h-screen bg-[#F4F3F0]">
      <div className="bg-[#F4F3F0] p-8 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Back to home link */}
        <div className="mb-4">
          <a href="/" className="text-blue-500 hover:underline">
            &larr; Back to home
          </a>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Update Existing Coffee Details
        </h1>

        {/* Form */}
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="input input-bordered w-full"
                defaultValue={loadedData.name}
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
                placeholder="Enter quantity"
                className="input input-bordered w-full"
                defaultValue={loadedData.quantity}
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
                placeholder="Enter supplier"
                className="input input-bordered w-full"
                defaultValue={loadedData.supplier}
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
                placeholder="Taste"
                className="input input-bordered w-full"
                defaultValue={loadedData.taste}
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
                placeholder="Category"
                className="input input-bordered w-full"
                defaultValue={loadedData.category}
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
                placeholder="Enter details"
                className="input input-bordered w-full"
                defaultValue={loadedData.details}
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
                placeholder="https://ibb.co/Pxq4Mpy"
                className="input input-bordered w-full"
                defaultValue={loadedData.photo}
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="mt-6 text-center">
            <button type="submit" className="btn bg-[#D2B48C] w-full">
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default UpdateCoffee;