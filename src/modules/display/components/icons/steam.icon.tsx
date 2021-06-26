import * as React from "react"

function SteamLogo({width="20px", height="20px", ...rest}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      width={width}
      height={height}
    >
      <path
        d="M15.156 3.281a4.383 4.383 0 00-4.375 4.37l-2.728 3.482a.469.469 0 00.411.756l.14-.013a2.347 2.347 0 012.334 2.343c0 .019 0 .038.002.057a.47.47 0 00-.018.105 2.32 2.32 0 01-2.328 2.181 2.327 2.327 0 01-1.81-.845.467.467 0 00-.835.251.469.469 0 00.111.346A3.276 3.276 0 008.594 17.5a3.26 3.26 0 003.23-2.838c1.02-.8 2.28-1.794 3.34-2.631a4.383 4.383 0 004.367-4.375 4.383 4.383 0 00-4.375-4.375zm0 .938a3.432 3.432 0 013.438 3.437 3.432 3.432 0 01-3.438 3.438H15a.468.468 0 00-.29.101c-.911.72-1.967 1.551-2.922 2.301a3.298 3.298 0 00-2.462-2.468L11.62 8.1a.468.468 0 00.1-.289v-.156a3.432 3.432 0 013.437-3.437zm0 .781A2.663 2.663 0 0012.5 7.656a2.663 2.663 0 002.656 2.657 2.663 2.663 0 002.656-2.657A2.663 2.663 0 0015.156 5zm0 .938c.955 0 1.719.763 1.719 1.718s-.764 1.719-1.719 1.719a1.712 1.712 0 01-1.719-1.719c0-.955.764-1.718 1.72-1.718zM1.752 9.797a1.41 1.41 0 00-1.307.844 1.413 1.413 0 00.728 1.85l6.857 3.015a1.52 1.52 0 00.564.118c.534 0 1.062-.32 1.29-.863a1.412 1.412 0 00-.728-1.848l-6.859-3h-.001a1.395 1.395 0 00-.544-.116zm-.009.94a.45.45 0 01.18.036l6.858 3h.001a.481.481 0 01.238.624.436.436 0 01-.426.29.641.641 0 01-.207-.048l-6.839-3.007h-.002a.481.481 0 01-.24-.619c.049-.114.145-.199.259-.243a.493.493 0 01.178-.034z"
        fill="#000"
      />
    </svg>
  )
}

export default SteamLogo
