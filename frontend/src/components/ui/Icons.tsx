import type { IconName } from "../../types/IconTypes";
import { iconMap } from "../../constants/IconMap";


function Icon({ name, size = 20, className = "" }: { name: IconName; size?: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`icon ${className}`}
      style={{width: size, height: size, fontSize: Math.max(12, size * 0.9)}}
    >
      {iconMap[name]}
    </span>
  );
}

export default Icon;