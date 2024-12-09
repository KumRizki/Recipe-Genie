import logo from "../assets/frying-pan-svgrepo-com.svg"

export default function Header() {
    return (
        <header>
            <img src={logo}/>
            <span>Recipe Genie</span>
        </header>
    )
}