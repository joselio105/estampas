import { Instagram } from "react-feather";

export function PageHeader(){
    return (
        <header className='flex justify-between items-center mt-3 w-full'>
            <div className='flex items-center w-full'>
                <a className='flex items-center justify-center w-20 h-20 overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[120%] md:h-24 md:w-24'>
                    <img className='h-full object-cover' src="./logo-aline-verissimo.jpg" alt="logo aline verissimo" />
                </a>
                <h1 className='flex flex-col ml-2 font-title text-2xl font-light'>
                    <span className='leading-4'>aline</span>
                    <span className='leading-4'>verissimo</span></h1>
            </div>
            <ul className='flex flex-col items-center justify-center gap-2 md:flex-row'>
                <li>
                    <a className='flex justify-center items-center p-2 h-12 w-12 transition-transform duration-300 hover:scale-125' target="_blank" href="https://www.colab55.com/@alineverissimo">
                        <img className='object-cover' src="./logo-colab55.png" alt="logo colab 55" />
                    </a>
                </li>
                <li>
                    <a className='flex justify-center items-center p-2 transition-transform duration-300 hover:scale-125' target="_blank" href="https://www.instagram.com/_aline_verissimo/">
                        <Instagram size={32} />
                    </a>
                </li>
            </ul>        
        </header>
    )
}