import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

const AgeTooltip = (): JSX.Element => {
  const [timestamp, setTimestamp] = useState<string>("");
  const birthDate: Date = new Date("2001-03-19T02:00:00");

  const calculateAge = (birthDate: Date): number => {
    const today: Date = new Date();
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const m: number = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    const updateTimestamp = (): void => {
      const now: Date = new Date();
      const diff: number = now.getTime() - birthDate.getTime();
      const years: number = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const months: number = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)
      );
      const days: number = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
      );
      const hours: number = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes: number = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds: number = Math.floor((diff % (1000 * 60)) / 1000);

      setTimestamp(
        `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`
      );
    };

    updateTimestamp();
    const interval: NodeJS.Timeout = setInterval(updateTimestamp, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="cursor-help">
          <span className="border-b border-dotted border-current">
            {calculateAge(birthDate)} años
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-mono text-sm">{timestamp}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AgeTooltip;
