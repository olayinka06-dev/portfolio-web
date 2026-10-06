export function OlayinkaLogo({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="7"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M8.5 11.5C8.5 10.3954 9.39543 9.5 10.5 9.5H12.5C13.6046 9.5 14.5 10.3954 14.5 11.5V20.5C14.5 21.6046 13.6046 22.5 12.5 22.5H10.5C9.39543 22.5 8.5 21.6046 8.5 20.5V11.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M18 9.5H21C23.2091 9.5 25 11.2909 25 13.5V18.5C25 20.7091 23.2091 22.5 21 22.5H18V9.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}