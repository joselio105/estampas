import clsx from "clsx";

export function Image({span=4, ...props}){
    return (
        <section className={clsx(
            'rounded-xl overflow-hidden h-80',
            {
                'md:col-span-1': span === 1,
                'md:col-span-2': span === 2,
                'md:col-span-3': span === 3,
                'md:col-span-4': span === 4,
            }
        )}><img className="h-full w-full object-cover" {...props} /></section>
    )
}