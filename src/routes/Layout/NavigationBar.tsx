import { Div } from "../../components"

export default function NavigationBar() {
    return (
        <Div className="flex flex-col bg-base-100">
            <p className="font-bold text-3xl">CineMemo</p>
            <p className="font-bold text-xl">
                {/* <Icon name="remove" className="text-sm" /> */}
                Home
            </p>
            <p className="font-bold text-xl">
                Search
            </p>
            <p className="font-bold text-xl">
                Profile
            </p>
        </Div>
    )
}