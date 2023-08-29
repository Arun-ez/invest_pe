import { Poppins } from 'next/font/google';
const font = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ['latin'] })

const Container = ({ children }) => {
    return (
        <div className={font.className}> {children} </div>
    )
}

export default Container;
