// an info button for the user to click on to learn more about the app

export default function InfoButton() {
  return (
    <div className="group absolute bottom-2 left-2 text-sm font-bold text-zinc-600 sm:bottom-8 sm:left-8">
      <div className="pointer-events-none absolute w-80 -translate-y-[300%] skew-y-[30deg] opacity-0 shadow-md duration-500 group-hover:-translate-y-[130%] group-hover:skew-y-0 group-hover:opacity-100 group-hover:delay-500 text-center">
        <div className="pretty rounded-md bg-lime-200 p-1 text-sm">
          <span>
            TA-DA! will affirm the value of your daily accomplishments. Embrace
            TA-DA! And celebrate achievements, big and small.
          </span>
        </div>
        <div className="absolute bottom-0 left-1/4 translate-x-full translate-y-1/2 rotate-45 bg-lime-200 p-1 shadow-md"></div>
      </div>

      <div className="flex cursor-pointer items-center rounded-full bg-gradient-to-br from-lime-200 to-yellow-200 p-3 shadow-md duration-300 group-hover:gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // eslint-disable-next-line react/no-unknown-property
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          version="1.1"
          id="Capa_1"
          width="24px"
          height="24px"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
        >
          <g>
            <path d="M17.962,24.725l1.806,0.096v2.531h-7.534v-2.406l1.045-0.094c0.568-0.063,0.916-0.254,0.916-1.014v-8.801   c0-0.699-0.188-0.92-0.791-0.92l-1.106-0.062v-2.626h5.666L17.962,24.725L17.962,24.725z M15.747,4.648   c1.394,0,2.405,1.047,2.405,2.374c0,1.331-1.014,2.313-2.438,2.313c-1.454,0-2.404-0.982-2.404-2.313   C13.31,5.695,14.26,4.648,15.747,4.648z M16,32C7.178,32,0,24.822,0,16S7.178,0,16,0c8.82,0,16,7.178,16,16S24.82,32,16,32z M16,3   C8.832,3,3,8.832,3,16s5.832,13,13,13s13-5.832,13-13S23.168,3,16,3z" />
          </g>
        </svg>
        <span className="text-[0px] duration-300 group-hover:text-sm">
          TA-DA! Version 1
        </span>
      </div>
    </div>
  )
}