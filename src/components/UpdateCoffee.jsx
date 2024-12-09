import Navbar from "../Navbar";

const UpdateCoffee = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
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

        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        {/* Form */}
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Americano Coffee"
                className="input input-bordered w-full"
                defaultValue="Americano Coffee"
              />
            </div>

            {/* Chef */}
            <div>
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                placeholder="Mr. Matin Paul"
                className="input input-bordered w-full"
                defaultValue="Mr. Matin Paul"
              />
            </div>

            {/* Supplier */}
            <div>
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                placeholder="Cappu Authoriser"
                className="input input-bordered w-full"
                defaultValue="Cappu Authoriser"
              />
            </div>

            {/* Taste */}
            <div>
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                placeholder="Sweet and hot"
                className="input input-bordered w-full"
                defaultValue="Sweet and hot"
              />
            </div>

            {/* Category */}
            <div>
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Americano"
                className="input input-bordered w-full"
                defaultValue="Americano"
              />
            </div>

            {/* Details */}
            <div>
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                placeholder="Espresso with hot water"
                className="input input-bordered w-full"
                defaultValue="Espresso with hot water"
              />
            </div>

            {/* Photo */}
            <div className="md:col-span-2">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="https://ibb.co/Pxq4Mpy"
                className="input input-bordered w-full"
                defaultValue="https://ibb.co/Pxq4Mpy"
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="mt-6 text-center">
            <button type="submit" className="btn btn-success text-white w-full">
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