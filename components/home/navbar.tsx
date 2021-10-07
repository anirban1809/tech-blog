const Navbar = () => {
    return <div className="sticky top-0 z-50 bg-white">
        <div className="flex justify-between">
            <ul className="flex py-5 mx-auto max-w-7xl ">
                <li className="mx-10 blue-vz text-xl cursor-pointer select-none"><a href="/">Home</a></li>
                <li className="mx-10 blue-vz text-xl cursor-pointer select-none">Categories</li>
                <li className="mx-10 blue-vz text-xl cursor-pointer select-none">About</li>
                <li className="mx-10 blue-vz text-xl cursor-pointer select-none">Contact</li>
            </ul>
            <ul className="flex py-5 mx-auto max-w-7xl ">
                <li className="mx-10 blue-vz text-xl cursor-pointer select-none">Login</li>
                <li className="mx-10 blue-vz text-xl cursor-pointer select-none">Sign Up</li>
            </ul>
        </div>

        <hr />
    </div>
}

export default Navbar;