import classes from '@/styles/home.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Body from '@/components/Body';
import { Card } from '@/components/Card';
import { BounceInfinity } from '@/icons/BounceInfinity';
import { Lenovo } from '@/icons/Lenovo';
import { Apple } from '@/icons/Apple';
import { InvestmentCard } from '@/components/InvestmentCard';
import { Hand } from '@/icons/Hand';
import { Car } from '@/icons/Car';
import { Gems } from '@/icons/Gems';
import { Diamond } from '@/icons/Diamond';

const home = () => {

  const investments = [
    { label: 'Value Deals', details: 'For the people who would love to risk huge to get rewarded. People who would love to risk huge to get rewarded', cager: '17.80%', minAmount: 120, icon: <Hand /> },
    { label: 'EV Revolution', details: 'For the people who would love to risk huge to get rewarded. People who would love to risk huge to get rewarded', cager: '17.80%', minAmount: 120, icon: <Car /> },
    { label: 'Hidden Gems', details: 'For the people who would love to risk huge to get rewarded. People who would love to risk huge to get rewarded', cager: '17.80%', minAmount: 120, icon: <Gems /> },
    { label: 'Hidden Gems', details: 'For the people who would love to risk huge to get rewarded. People who would love to risk huge to get rewarded', cager: '17.80%', minAmount: 120, icon: <Diamond /> }
  ]

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
        <title> InventPe - Invest to pay, Invest to spent </title>
        <meta name="description" content="Knowledge Based Investing & Trading" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <header className={classes.header}>
          <h1> Knowledge Based </h1>
          <h1> Investing & Trading </h1>
          <p> Ready-made solutions + Deep Research + Disciplined Investing + Advanced Trading tools </p>
          <img src="/assets/impression.png" alt="branding" />
        </header>

        <section className={classes.section1}>
          <div>
            <div>
              <p className={classes.feature}> Features </p>

              <h1> SAVE NOW. BUY LATER. </h1>
              <h1> SIMPLE & REALISTIC  </h1>

              <p className={classes.description}> Get what you love and save up over weeks or months to achieve it much lower price. Time & Flexibility on your side. </p>

              <div className={classes.learn}>
                <button> Get the App </button>
                <Link href={'/'}> Learn More </Link>
              </div>
            </div>
          </div>

          <div>
            <div className={classes.showcase}>
              <div className={classes.icon_inline}>
                <img src="/assets/apple.png" alt="icon" />
                <img src="/assets/myntra.png" alt="icon" />
                <img src="/assets/amazon.png" alt="icon" />
                <img src="/assets/croma.png" alt="icon" />
              </div>

              <div className={classes.card1}>
                <div className={classes.images}>
                  <img src="/assets/bounce.png" alt="icon" />
                  <img src="/assets/makemytrip.png" width={'60px'} height={'90px'} alt="icon" />
                </div>

                <Card src={'/assets/bike.png'} brand={'Bounce Infinity EV'} icon={<BounceInfinity />} highlight={'Save up for your next Laptop'} returns={'10%'} discount={400} />

                <div className={classes.images}>
                  <img src="/assets/carartlane.png" alt="icon" />
                  <img src="/assets/easymytrip.png" alt="icon" />
                </div>
              </div>

              <div className={classes.card2}>
                <Card width={'500px'} src={'/assets/laptop.png'} brand={'Lenovo'} icon={<Lenovo />} highlight={'Save up for your next Bike'} returns={'10%'} discount={400} />
                <img src="/assets/pepperfry.png" width={'200px'} height={'50px'} alt="icon" />
              </div>

              <div className={classes.card2}>
                <Card src={'/assets/iphone.png'} brand={'Apple'} icon={<Apple />} highlight={'Save up for your next Bike'} returns={'10%'} discount={400} />
              </div>

            </div>
          </div>
        </section>


        <section className={classes.section2}>
          <div className={classes.banner_container}>
            <div className={classes.details}>
              <h1> Essential Features for the Super </h1>
              <h1> Trader in You - All in <span> One Platform </span> </h1>

              <p> Save hours of research by using our readymade <br /> screens to find your next investment </p>

              <div className={classes.idea}>
                <img src='/assets/bulb.svg' />
                <div>
                  <p> 30+ ANALYTICAL TOOLS & CHARTING + LIVE </p>
                  <p> TRADES + STOCK PICKS & MUCH MORE </p>
                </div>
              </div>

              <div className={classes.quick_links}>
                <button> Get started now </button>
                <a href="/"> See all features </a>
              </div>
            </div>

            <div className={classes.screens}>
              <img src="/assets/screen1.png" alt="screen" />
              <img src="/assets/screen2.png" alt="screen" />
              <img src="/assets/screen3.png" alt="screen" />
            </div>
          </div>
        </section>

        <section className={classes.section3}>

          <div>
            <h1> STOCK INVESTING, SIMPLIFIED </h1>

            <p> Online trading and investing in the market <br />
              does not have to be boring.  </p>

            <p> While we adopt a technology-led approach in <br />
              building our product, we are keeping our users-investors <br />
              and traders even before that </p>
          </div>

          <div className={classes.investment_cards}>
            {investments.map((elm, index) => {
              return (
                <InvestmentCard data={elm} key={index} />
              )
            })}
          </div>
        </section>

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

export default home;