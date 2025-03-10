

interface IProps {
    color: string
}


export const IconProfile = ( {color }: IProps) => {
    return (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.49996 9.21657C11.7872 9.21657 13.6413 7.48614 13.6413 5.35154C13.6413 3.21694 11.7872 1.48651 9.49996 1.48651C7.21278 1.48651 5.35864 3.21694 5.35864 5.35154C5.35864 7.48614 7.21278 9.21657 9.49996 9.21657Z" stroke={color} strokeLinecap="round"/>
<path d="M17.5 17.5135C17.0289 16.2806 15.9884 15.1916 14.5421 14.4147C13.0957 13.6378 11.3232 13.2166 9.5 13.2166C7.67678 13.2166 5.9043 13.6378 4.45794 14.4147C3.01158 15.1916 1.97108 16.2806 1.5 17.5135" stroke={color} strokeLinecap="round"/>
</svg>

    )
}