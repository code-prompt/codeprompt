import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-1 font-display text-xl font-bold ${className}`}>
      <span className="text-primary">{"{"}</span>
      <span className="text-heading">Code Prompt</span>
      <span className="text-primary">{"}"}</span>
    </Link>
  );
};

export default Logo;
