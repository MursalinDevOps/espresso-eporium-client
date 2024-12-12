import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    // call the authContext
    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // create an firebase user 
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const creationTime = result?.user?.metadata?.creationTime;
                console.log(creationTime)
                const newUser = {name, email};
                // save the new user to MongoDB
                fetch('http://localhost:5000/users', {
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('User sent to the DB', data);
                    if(data.insertedId){
                        Swal.fire({
                            title: "Good job!",
                            text: "User created Successfully!",
                            icon: "success"
                          });
                    }
                })
            })
            .catch(err => {
                console.log("ERROR", err)
            })

    }
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            {/* form */}
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
                    <h1 className="text-2xl text-center font-bold pt-8">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <p>already have an account ? <span><Link to='/signIn' className="underline text-green-700 font-medium">Sign In</Link></span> </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;