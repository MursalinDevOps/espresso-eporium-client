import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar";

const Root = () => {

    const allCoffeeData = useLoaderData();
    console.log(allCoffeeData)
    return (
        <div>
        <nav>
            <Navbar></Navbar>
        </nav>
        <div>
            <h1 className="text-3xl text-center mt-5">Total Coffees - {allCoffeeData.length}</h1>
        </div>
        </div>
    );
};

export default Root;