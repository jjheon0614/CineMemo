import { Div } from "../../components"
import { Link } from "react-router-dom"

export default function NavigationBar() {
    return (
        <Div className="flex flex-col bg-base-100">
            <p className="text-3xl font-bold">CineMemo</p>
            <p className="text-xl font-bold">
                {/* <Icon name="remove" className="text-sm" /> */}
                Home
            </p>
            <p className="text-xl font-bold">
                Search
            </p>
            <p className="text-xl font-bold">
                Profile
            </p>
            <div className="flex items-center p-2">
                <Link to="/login" className="btn btn-sm btn-primary">
                    Login
                </Link>
                <Link to="/signup" className="ml-4 btn btn-sm btn-outline btn-primary">
                    Signup
                </Link>
            </div>
        </Div>
    )
}