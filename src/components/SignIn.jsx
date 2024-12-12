import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const SignIn = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            {/*  */}
            <section>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
                        <h1 className="text-2xl text-center font-bold pt-8">Sign In</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>Don't have an account ? <span><Link to='/signUp' className="underline text-red-700 font-medium">Sign Up</Link></span> </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignIn;