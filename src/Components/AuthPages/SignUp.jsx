import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../AuthContext/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUP = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const img = form.img.value
        const password = form.password.value
        console.log(email, password, img, name);
        createUser(email, password)
            .then(res => {
                console.log(res.user)
                const createdAt = res.user.metadata.creationTime
                const user = { email, createdAt: createdAt }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                }).then(res => res.json())
                    .then(data => {
                        console.log(data)
                        data.insertedId && Swal.fire('Congratulation', "User Created Successfully", 'success')
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Signup now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSignUP} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name </span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" placeholder="Photo Url" name='img' className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;