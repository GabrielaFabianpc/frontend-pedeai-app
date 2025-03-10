interface IProps {
    color: string
}

export const IconMinus = ( {color }: IProps) => {
  return (
    <svg
      width="7"
      height="1"
      viewBox="0 0 7 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_1151)">
        <path
          d="M6.5 1H0.5C0.367392 1 0.240215 0.947321 0.146447 0.853553C0.0526785 0.759785 0 0.632608 0 0.5C0 0.367392 0.0526785 0.240215 0.146447 0.146447C0.240215 0.0526785 0.367392 0 0.5 0H6.5C6.63261 0 6.75979 0.0526785 6.85355 0.146447C6.94732 0.240215 7 0.367392 7 0.5C7 0.632608 6.94732 0.759785 6.85355 0.853553C6.75979 0.947321 6.63261 1 6.5 1Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_25_1151">
          <rect width="7" height="1" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};