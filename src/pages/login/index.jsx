import classes from "@/styles/login.module.css";
import Head from 'next/head';
import Body from '@/components/Body';


const login = () => {

    const brands = [
        '/assets/kotak.png',
        '/assets/angel.png',
        '/assets/uptax.png',
        '/assets/amei.png',
        '/assets/landbox.png',
        '/assets/liquiloans.png',
    ]


    return (
        <>
            <Head>

            </Head>

            <Body>
                <section className={classes.section4}>
                    <div>
                        <p> Some partners who make <br /> InvestPe products possible— </p>
                        <div className={classes.brands}>
                            {brands.map((src, index) => {
                                return (
                                    <img src={src} alt="logo" key={index} />
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <p> ...and a few of the <br /> businesses building some <br /> incredible solutions with <br /> InvestPe </p>

                        <div>
                            <img src="/assets/siply.png" alt="siply" />
                            <img src="/assets/jupiter.png" alt="jupiter" />
                        </div>
                    </div>
                </section>
            </Body>
        </>
    )
}

export default login;
