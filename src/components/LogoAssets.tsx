export const LogoAssets = {
  NestJS: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M16 2.5L2.5 16L16 29.5L29.5 16L16 2.5Z"
        fill="#E0234E"
        fillOpacity="0.2"
      />
      <path d="M16 29.5L2.5 16L16 2.5V29.5Z" fill="#E0234E" />
      <path
        d="M29.5 16L16 2.5V16L22.75 22.75L29.5 16Z"
        fill="#E0234E"
        fillOpacity="0.6"
      />
      <path d="M16 29.5V16H29.5L16 29.5Z" fill="#E0234E" fillOpacity="0.8" />
    </svg>
  ),
  NextJS: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        fill="white"
      />
      <path
        d="M26.6667 26.6667H24V13.3333H21.3333V26.6667H18.6667V10.6667H21.3333L26.6667 21.3333V26.6667Z"
        fill="black"
      />
      <path d="M10.6667 26.6667H8V10.6667H10.6667V26.6667Z" fill="black" />
      <path
        d="M24.5333 28.5333L12.5333 13.0667V10.9333L26.6667 25.8667V28.5333H24.5333Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="19.6"
          y1="19.7333"
          x2="26.6667"
          y2="28.5333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="black" />
          <stop offset="1" stopColor="black" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  TypeScript: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <rect width="32" height="32" rx="4" fill="#3178C6" />
      <path d="M16.5 17H13.5V25H11.5V17H8.5V15H16.5V17Z" fill="white" />
      <path
        d="M23.5 19.5C23.5 18.2 22.8 17.5 21 17L19.5 16.5C18.5 16.2 18.2 15.8 18.2 15.2C18.2 14.5 18.8 14 19.8 14C20.8 14 21.2 14.5 21.3 15.2H23.2C23.1 13.5 22 12.5 19.8 12.5C17.6 12.5 16.3 13.8 16.3 15.5C16.3 17 17.2 17.8 18.8 18.2L20.5 18.8C21.8 19.2 22 19.8 22 20.5C22 21.2 21.2 21.8 20 21.8C18.8 21.8 18.2 21.2 18.1 20.2H16.2C16.3 22.2 17.8 23.5 20.1 23.5C22.5 23.5 24 22.2 24 20.2V19.5H23.5Z"
        fill="white"
      />
    </svg>
  ),
  GPT4o: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <rect width="32" height="32" rx="16" fill="#10A37F" />
      <path
        d="M16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6ZM16 22C12.6863 22 10 19.3137 10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22Z"
        fill="white"
      />
    </svg>
  ),
  Tailwind: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M9.5 10.5C9.5 10.5 8.5 13.5 12.5 15.5C16.5 17.5 19.5 21.5 19.5 21.5C19.5 21.5 14.5 24.5 12.5 19.5C10.5 14.5 5.5 13.5 5.5 13.5C5.5 13.5 9.5 6.5 17.5 7.5C25.5 8.5 27.5 14.5 27.5 14.5C27.5 14.5 26.5 17.5 22.5 15.5C18.5 13.5 17.5 10.5 17.5 10.5C17.5 10.5 24.5 8 26.5 12.5"
        stroke="#38BDF8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Docker: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M13 3H11V5H13V3ZM13 6H11V8H13V6ZM13 9H11V11H13V9ZM10 6H8V8H10V6ZM10 9H8V11H10V9ZM7 9H5V11H7V9ZM22.5 12H21.4C21.2 11.4 20.6 11 19.9 11H14.8C14.2 8.4 12.8 8 12.8 8V12H2V14.9C2 16.5 3.3 17.9 5 17.9H19.2C20.9 17.9 22.2 16.6 22.2 14.9V14.2C22.6 13.9 22.9 13.4 22.9 12.9C23 12.5 22.8 12.1 22.5 12Z"
        fill="#2496ED"
      />
    </svg>
  ),
  Whisper: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18C10.07 18 8.5 16.43 8.5 14.5C8.5 12.57 10.07 11 12 11C13.93 11 15.5 12.57 15.5 14.5C15.5 16.43 13.93 18 12 18ZM13.5 8.5L12 6L10.5 8.5H13.5Z"
        fill="#7450A9"
      />
    </svg>
  ),
  BullMQ: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#E65100" />
      <path d="M3 17L12 22L21 17V7L12 12L3 7V17Z" fill="#F57C00" />
    </svg>
  ),
  Redis: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        fill="#D82C20"
      />
      <path d="M12 6L9 12H15L12 18L15 12H9L12 6Z" fill="#D82C20" />
    </svg>
  ),
  ReactFlow: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3"
        y="3"
        width="7"
        height="7"
        stroke="#FF0072"
        strokeWidth="2"
        rx="1"
      />
      <rect
        x="14"
        y="14"
        width="7"
        height="7"
        stroke="#FF0072"
        strokeWidth="2"
        rx="1"
      />
      <path
        d="M10 6.5H12C13.1046 6.5 14 7.39543 14 8.5V14"
        stroke="#555"
        strokeWidth="2"
      />
    </svg>
  ),
  Swc: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 4H10V10H4V4Z" fill="#F7CA41" />
      <path d="M14 4H20V10H14V4Z" fill="#F7CA41" />
      <path d="M4 14H10V20H4V14Z" fill="#F7CA41" />
      <path d="M14 14H20V20H14V14Z" fill="#F7CA41" />
    </svg>
  ),
  AWS: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M17.6 13.9C16.9 14.7 15.9 15.3 14.8 15.6C16 15.8 17.5 15.2 18.2 14.4C18.2 14.4 18.6 14 18.6 14C18.4 14.3 18.2 14.6 17.9 14.9C17.6 15.2 17.2 15.5 16.8 15.7C16 16.1 15 16.2 14.1 16C13.2 15.8 12.3 15.3 11.6 14.7C10.9 14.1 10.4 13.3 10.1 12.4C9.8 11.5 9.8 10.6 10 9.7C10.2 8.8 10.7 8 11.4 7.4C12.1 6.8 12.9 6.4 13.8 6.2C14.7 6 15.6 6.1 16.5 6.4C16.9 6.5 17.3 6.7 17.6 7C17.9 7.3 18.2 7.6 18.4 8H16.8C16.5 7.8 16.2 7.6 15.8 7.5C15.2 7.3 14.5 7.3 13.9 7.5C13.3 7.7 12.8 8.1 12.4 8.6C12 9.1 11.8 9.7 11.8 10.3C11.8 10.9 12 11.5 12.4 12C12.8 12.5 13.3 12.8 13.9 13C14.5 13.2 15.2 13.2 15.8 13C16.2 12.9 16.5 12.7 16.8 12.5V11H14.5V9.8H18.2V12.6C18.2 12.6 18.2 13 18.1 13.2C18 13.4 17.8 13.7 17.6 13.9Z"
        fill="#FF9900"
      />
      <path
        d="M12.9 19C11.6 19 10.4 18.6 9.3 18C8.2 17.4 7.3 16.5 6.6 15.4C5.9 14.3 5.5 13 5.5 11.7C5.5 10.4 5.9 9.1 6.6 8C7.3 6.9 8.2 6 9.3 5.4C10.4 4.8 11.6 4.4 12.9 4.4C14.2 4.4 15.4 4.8 16.5 5.4C17.6 6 18.5 6.9 19.2 8C19.9 9.1 20.3 10.4 20.3 11.7C20.3 13 19.9 14.3 19.2 15.4C18.5 16.5 17.6 17.4 16.5 18C15.4 18.6 14.2 19 12.9 19ZM12.9 17.6C14 17.6 15 17.3 15.9 16.7C16.8 16.2 17.5 15.4 18 14.5C18.5 13.6 18.8 12.7 18.8 11.7C18.8 10.7 18.5 9.8 18 8.9C17.5 8 16.8 7.2 15.9 6.7C15 6.1 14 5.8 12.9 5.8C11.8 5.8 10.8 6.1 9.9 6.7C9 7.2 8.3 8 7.8 8.9C7.3 9.8 7 10.7 7 11.7C7 12.7 7.3 13.6 7.8 14.5C8.3 15.4 9 16.2 9.9 16.7C10.8 17.3 11.8 17.6 12.9 17.6Z"
        fill="#FF9900"
      />
    </svg>
  ),
};
