import Link from "next/link"

export const NavigationBar = () => {
    return <nav>
        <ul>
            <li>
                <Link href="/portfolio"><a>Portfolio</a></Link>
            </li>
            <li>Contact</li>
            <li>Resume</li>
        </ul>
    </nav>
}