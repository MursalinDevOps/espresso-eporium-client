import Navbar from "../Navbar";

const AddCoffee = () => {
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
                        Add New Coffee
                    </h1>

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
                                    placeholder="Enter coffee name"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            {/* Chef */}
                            <div>
                                <label className="label">
                                    <span className="label-text">Chef</span>
                                </label>
                                <input
                                    type="text"
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
                                    placeholder="Enter photo URL"
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>

                        {/* Submit button */}
                        <div className="mt-6 text-center">
                            <button type="submit" className="btn btn-primary w-full">
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