import classes from '@/styles/navbar.module.css';
import Link from 'next/link';
import { Logindoor } from '@/icons/Logindoor';
import { Search } from '@/icons/Search';
import { DownArrow } from '@/icons/DownArrow';

import { useRouter } from 'next/router';
import { DropdownItem } from './DropdownItem';
import { useState } from 'react';

const Navbar = () => {

    const { pathname, replace } = useRouter();
    const [isOpen, setOpen] = useState(false);

    const isLoginPage = () => {
        return pathname === '/login'
    }

    const investments = [
        { label: 'Mutual Funds', details: 'E2E infrastructure for mutual fund investing', icon: '/assets/investment1.svg' },
        { label: 'Indian Equity', details: 'Ready-made stock baskets with major broker integrations', icon: '/assets/investment2.svg' },
        { label: 'Digital Gold', details: 'Allow your users to buy & sell digital gold', icon: '/assets/investment3.svg' },
        { label: 'Fixed Deposits', details: 'Book FDs in one-click without opening a bank account', icon: '/assets/investment4.svg' }
    ]

    const data = [
        { label: 'Market Researchs', details: 'Deep-tech stock research & analysis', icon: '/assets/data1.svg' },
        { label: 'Historical Performance', details: 'Multi timeframe historical data for stocks, mutual funds & digital gold', icon: '/assets/data2.svg' },
    ]

    return (
        <nav className={classes.navbar}>

            <div>
                <img src="/assets/logo.png" alt="logo" onClick={() => replace('/')} />

                {isLoginPage() && (
                    <div className={classes.gateway}>
                        Gateway
                        <div className={classes.circle}>

                        </div>
                    </div>
                )}

            </div>

            {isLoginPage() ? (
                <>
                    <div className={classes.navitems}>
                        <p onClick={() => setOpen(!isOpen)}> Products <DownArrow /> </p>
                        <p> About </p>

                        {isOpen && (
                            <div className={classes.dropdown}>
                                <div>
                                    <p className={classes.head}> Investment </p>

                                    {investments.map((elm, index) => {
                                        return (
                                            <DropdownItem data={elm} key={index} />
                                        )
                                    })}
                                </div>

                                <div>
                                    <p className={classes.head}> DATA </p>

                                    {data.map((elm, index) => {
                                        return (
                                            <DropdownItem data={elm} key={index} />
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>


                </>
            ) : (
                <>
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
                </>
            )}




        </nav>
    )
}

export { Navbar }
