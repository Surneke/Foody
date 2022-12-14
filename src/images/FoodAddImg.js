export const FoodAddImg = ({color, width, height}) => {
  return (
    <svg
      width={width ? width : "96"}
      height= {height ? height : "96"}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="48" cy="48" r="47.5" fill="#F0F8E7"  stroke={color? color: "#66B60F" }/>
      <g clipPath="url(#clip0_2544_96882)">
        <path
          d="M34 32V38C34 39.5913 34.6321 41.1174 35.7574 42.2426C36.8826 43.3679 38.4087 44 40 44C41.5913 44 43.1174 43.3679 44.2426 42.2426C45.3679 41.1174 46 39.5913 46 38V32M62 30V54H52C51.954 46.638 52.368 39.188 62 30ZM62 54V66H60V60L62 54ZM40 32V66V32Z"
          stroke={color? color: "#66B60F" }
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2544_96882">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(24 24)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
