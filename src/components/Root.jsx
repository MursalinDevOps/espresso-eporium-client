import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar";
import CoffeeCard from "./CoffeeCard";

const Root = () => {

    const allCoffeeData = useLoaderData();
    console.log(allCoffeeData)
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            {/*  */}
            <div className="bg-neutral-100 min-h-screen py-10">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h3 className="text-sm text-gray-500">--- Sip & Savor ---</h3>
                        <h1 className="text-3xl font-bold text-gray-800 mt-2">Our Popular Products</h1>
                        <Link to='/addCoffee' className="btn btn-warning btn-sm mt-4">Add Coffee ☕</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {allCoffeeData.map((coffee, idx) => (
                            <CoffeeCard key={idx} coffee={coffee}></CoffeeCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Root;