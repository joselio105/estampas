import clsx from 'clsx';
import { ReactNode, ImgHTMLAttributes } from 'react'
import { Instagram} from 'react-feather'

// TODO: Efeito ao rolar tela para baixo
// TODO: Componente PageHeader
// TODO: Componente Draw
// TODO: Carregar arquivos do google drive

export function Index(){
    return (
        <div className='flex flex-col justify-center mx-auto gap-3 w-screen max-w-[1200px]'>
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
            <main className='flex flex-col items-center gap-3 overflow-hidden md:grid md:grid-cols-4'>
                <DrawContainer>
                    <Draw src="https://source.unsplash.com/1200x800/?cat" alt="random image" />
                </DrawContainer>
                <DrawContainer span={1}>
                    <Draw src="https://source.unsplash.com/1200x800/?mouse" alt="random image" />
                </DrawContainer>
                <DrawContainer span={3}>
                    <Draw src="https://source.unsplash.com/1200x800/?dog" alt="random image" />
                </DrawContainer>
                <DrawContainer span={2}>
                    <Draw src="https://source.unsplash.com/1200x800/?bird" alt="random image" />
                </DrawContainer>
                <DrawContainer span={2}>
                    <Draw src="https://source.unsplash.com/1200x800/?horse" alt="random image" />
                </DrawContainer>
{/*                 <DrawContainer span={1}>
                    <Draw src="https://source.unsplash.com/1200x800/?pig" alt="random image" />
                </DrawContainer>
                <DrawContainer span={1}>
                    <Draw src="https://source.unsplash.com/1200x800/?fish" alt="random image" />
                </DrawContainer>
                <DrawContainer span={1}>
                    <Draw src="https://source.unsplash.com/1200x800/?panda" alt="random image" />
                </DrawContainer>
                <DrawContainer span={1}>
                    <Draw src="https://source.unsplash.com/1200x800/?sea" alt="random image" />
                </DrawContainer> */}
{/*                 <DrawContainer>
                    <Draw src="https://source.unsplash.com/1200x800/?moon" alt="random image" />
                </DrawContainer>
                <DrawContainer span={2}>
                    <Draw src="https://source.unsplash.com/1200x800/?sun" alt="random image" />
                </DrawContainer>
                <DrawContainer span={2}>
                    <Draw src="https://source.unsplash.com/1200x800/?star" alt="random image" />
                </DrawContainer>
                <DrawContainer>
                    <Draw src="https://source.unsplash.com/1200x800/?cloud" alt="random image" />
                </DrawContainer> */}
            </main>
        </div>
    )
}

interface Props {
    children: ReactNode;
    span?: 1 | 2 | 3 | 4
}

function DrawContainer({children, span=4}: Props){
    return (
        <section className={clsx(
            'rounded-xl overflow-hidden h-80',
            {
                'md:col-span-1': span === 1,
                'md:col-span-2': span === 2,
                'md:col-span-3': span === 3,
                'md:col-span-4': span === 4,
            }
        )}>{children}</section>
    )
}

function Draw(props: ImgHTMLAttributes<HTMLImageElement>){
    return <img {...props} />
}