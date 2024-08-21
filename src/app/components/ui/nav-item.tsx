import Link from "next/link"
type props = {
    path: string,
    label: string
}
const NavItem = ({ path, label }: props) => {
    return (
        <Link href={path} className="text-primary text-base leading-5 tracking-[-0.02em] px-[16.39px]">
            {label}
        </Link>
    )
}

export default NavItem