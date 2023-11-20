export function PageMain({children}){
    return (
        <main className='flex flex-col items-center gap-3 overflow-hidden md:grid md:grid-cols-4'>{children}</main>
    )
}