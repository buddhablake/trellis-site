"use client";

export function OrganicPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-[1000px] h-[1000px] -right-[400px] -top-[400px] text-forest/5"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M500,500 Q750,250 1000,500 T1500,500 T2000,500 T2500,500"
          transform="rotate(45, 500, 500)"
        />
        <path
          fill="currentColor"
          d="M0,500 Q250,750 500,500 T1000,500 T1500,500 T2000,500"
          transform="rotate(-45, 500, 500)"
        />
      </svg>
      <svg
        className="absolute w-[800px] h-[800px] -left-[300px] -bottom-[300px] text-sage/5"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M500,500 Q750,250 1000,500 T1500,500 T2000,500 T2500,500"
          transform="rotate(135, 500, 500)"
        />
        <path
          fill="currentColor"
          d="M0,500 Q250,750 500,500 T1000,500 T1500,500 T2000,500"
          transform="rotate(-135, 500, 500)"
        />
      </svg>
    </div>
  )
}
