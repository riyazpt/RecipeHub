
import imageLogo from '@/assets/logo.png'
import Link from 'next/link'
import MainHeaderBackground from './main-header-background'
import classes from './main-header.module.css'
import NavLink from './nav-link'

import Image from 'next/image'
function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={imageLogo} alt="food logo" priority />
                    Next level food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>

                            <NavLink href='/meals' > Browse meals</NavLink>
                        </li>
                        <li>

                            <NavLink href='/community' > Foddie community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader