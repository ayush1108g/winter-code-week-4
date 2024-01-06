export default function Button({ children, ...props }) {
    return (
        <button className={`px-4 py-2 w-70 text-xs mt-5 md:text-base rounded-md bg-blue text-stone-400 hover:bg-stone-600 hover:text-stone-100 ${props.extraclass}`} {...props}>{children}</button>
    )
}
