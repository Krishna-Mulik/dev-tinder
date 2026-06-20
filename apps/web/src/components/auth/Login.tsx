import type React from "react"
import { axiosDevBackend } from "../../utils/axios";

const Login = () => {

    const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const res = await axiosDevBackend.postForm('/users/login', formData);
        console.log(res);
    }


    return (
        <form className="m-auto" onSubmit={handleLogin}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label htmlFor="email" className="label">Email</label>
                <input name="email" id="email" type="email" className="input" placeholder="Email" />

                <label htmlFor="password" className="label">Password</label>
                <input name="password" id="password" type="password" className="input" placeholder="Password" />

                <button type="submit" className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </form>
    )
}

export default Login
