import Link from "next/link";
import NavItem from "../ui/nav-item";

const Nav = [
    {
        label: "About Us",
        path: "#aboutus"
    },
    {
        label: "Pricing",
        path: "#pricing"
    },
    {
        label: "FAQs",
        path: "#faqs"
    },
    {
        label: "Terms",
        path: "/terms"
    }
]

const Header = () => {
    return (
        <div className="w-full flex items-center justify-between bg-white mx-auto max-w-[1338px] pr-[19.8px] pl-[19.76px] h-[89.92px] shadow-dropshadow rounded-[14.82px] mt-[49.54px] relative">
            <Link href="/">
                <img alt="logo" src="/logo.svg" className="w-[126px] lg:w-auto" />
            </Link>
            <div className="hidden md:flex items-center justify-center gap-4 lg:gap-[21.74px]">
                {Nav.map((nav, index) => (
                    <NavItem key={index} path={nav.path} label={nav.label} />
                ))}
            </div>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2.5">
                    <button className="px-[13.05px] bg-transparent hover:bg-primary hover:text-white h-10 transition-all rounded-default outline-none border-none hidden md:flex items-center justify-center text-center text-primary text-base leading-5 tracking-[-0.02em]">
                        Log In
                    </button>
                    <button className="flex items-center justify-center gap-0.5 h-12 w-[134px] lg:w-[154px] bg-blue hover:bg-primary text-base leading-5 font-medium text-white rounded-default">
                        Get Started
                        <img src="/arrow-right-icon.svg" alt="arrowRight" />
                    </button>
                </div>
                <span className="flex md:hidden items-center justify-center h-12 w-12 bg-blue/25 rounded-[15px] p-2 cursor-pointer">
                    <img alt="menu" src="/menu.svg" />
                </span>
            </div>

        </div>
    )
}

export default Header;