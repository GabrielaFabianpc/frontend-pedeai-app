
interface IProps {
    color: string
}
export const IconOrder = ({color}: IProps) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.83325 2.83334H5.83325V29.5H3.83325V2.83334ZM13.1666 8.16668H22.9999V10.1667H13.1666V8.16668ZM13.1666 13.5H22.9999V15.5H13.1666V13.5Z" fill={color}/>
<path d="M25.3333 2.66666H8V29.3333H25.3333C26.804 29.3333 28 28.1373 28 26.6667V5.33332C28 3.86266 26.804 2.66666 25.3333 2.66666ZM26 27H10V4.99997H26V27Z" fill={color}/>
</svg>
    )
}