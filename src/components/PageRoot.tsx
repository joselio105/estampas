import { ReactNode} from 'react'

interface Props {
    children: ReactNode
}
export function PageRoot({children}: Props){
    return (
        <div className='flex flex-col justify-center mx-auto gap-3 w-screen max-w-[1200px]'>{children}</div>
    )
}