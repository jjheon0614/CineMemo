import { Div } from "../../components"

export default function NavigationBar() {
    return (
        <Div className="flex flex-col bg-base-100">
            <p className="text-3xl font-bold">CineMemo</p>
            <p className="text-xl font-bold">
                <Icon name="remove" className="text-sm" />
                Home
            </p>
            <p className="text-xl font-bold">
                Search
            </p>
            <p className="text-xl font-bold">
                Profile
            </p>
        </Div>
    )
}