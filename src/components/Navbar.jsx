import classes from '@/styles/navbar.module.css';
import Link from 'next/link';
import { Logindoor } from '@/icons/Logindoor';
import { Search } from '@/icons/Search';

const Navbar = () => {

    return (
        <nav className={classes.navbar}>

            <div>
                <img src="/assets/logo.png" alt="" />
            </div>

            <div>
                <div className={classes.searchbar}>
                    <Search />
                    <input type="text" placeholder="Search stocks, ETFs, indices" />
                </div>
            </div>

            <div>
                <Link href={'/login'}>
                    <button>
                        <Logindoor />
                        <p> Login </p>
                    </button>
                </Link>

            </div>
        </nav>
    )
}

export { Navbar }
