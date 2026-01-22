/**
 * RealServ Wordmark Component
 * SVG version of the RealServ brand wordmark
 */

interface RealServWordmarkProps {
  className?: string;
}

export function RealServWordmark({ className = "h-12" }: RealServWordmarkProps) {
  return (
    <svg
      viewBox="0 0 400 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* RealServ Text */}
      <text
        x="200"
        y="55"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="48"
        fontWeight="700"
        fill="#1A1A1A"
      >
        RealServ
      </text>
    </svg>
  );
}
