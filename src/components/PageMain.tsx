import { ReactNode} from 'react'

interface Props {
    children: ReactNode
}
export function PageMain({children}: Props){
    return (
        <main className='flex flex-col items-center gap-3 overflow-hidden md:grid md:grid-cols-4'>{children}</main>
    )
}