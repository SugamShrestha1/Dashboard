"use client";


const Login = () => {
    return (
        <form className="space-y-4">
            <div className='text-wite'>
                <label className="block text-sm font-medium ">Email</label>
                <input type="email" className="mt-1 w-full p-2 border rounded-md"/>
            </div>

            <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                    type="password"

                    className="mt-1 w-full p-2 border rounded-md"
                />

            </div>



            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700" >
                Login
            </button>
        </form>
    );
}

export default Login;