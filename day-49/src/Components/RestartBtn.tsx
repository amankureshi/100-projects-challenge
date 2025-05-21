import { useRef } from "react";
import { GrPowerReset } from "react-icons/gr";

type RestartBtnProps = {
  onRestart: () => void,
  className?: string,
}

const RestartBtn = ({ onRestart, className = "" }: RestartBtnProps) => {

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    onRestart();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
    >
      <GrPowerReset className="w-6 h-6" />
    </button>
  );
};
export default RestartBtn;
