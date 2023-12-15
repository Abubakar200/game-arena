import Action from "./action"
import Logo from "./logo"
import Search from "./search"

export const Navbar = () => {
    return (
        <div className="w-full top-0 fixed z-[49] h-20 bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm">
            <Logo />
            <Search />
            <Action />
        </div>
    )
}