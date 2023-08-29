import { Poppins } from 'next/font/google';
const font = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ['latin'] })

const Body = ({ children }) => {
    return (
        <main className={font.className}> {children} </main>
    )
}

export default Body;
