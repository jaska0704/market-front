'use client';
import React, { useState, useRef, useEffect } from "react";
const Timer: React.FC = () => {
  const Ref = useRef<NodeJS.Timeout | null>(null);
  const [timer, setTimer] = useState<string>("00:00:00");
  const [day, setDay] = useState<number>(0);

  const getTimeRemaining = (
    e: Date
  ): {
    total: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } => {
    const total = e.getTime() - new Date().getTime();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };


  const startTimer = (e: Date): void => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setDay(days);
      setTimer(
        `${hours > 9 ? hours : "0" + hours}:${
          minutes > 9 ? minutes : "0" + minutes
        }:${seconds > 9 ? seconds : "0" + seconds}`
      );
    }
  };

  const clearTimer = (e: Date): void => {
    setTimer("00:00:10");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = (): Date => {
    let deadline = new Date();
    deadline.setDate(deadline.getDate() + 45);
    deadline.setHours(19);
    deadline.setMinutes(45);
    deadline.setSeconds(28);
    return deadline;
  };


  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

 

  return (
    <div>
      <h1 className="text-[14px] font-semibold py-3">Hurry up! Special offer:</h1>
      <div className="flex items-center gap-2">
        <div className="flex flex-col justify-center items-center rounded-full bg-gray-200 w-[60px] h-[60px]">
          {day > 0 && <h2 className="font-bold">{day}</h2>}
          <h2 className="text-[10px] text-gray-500">DAYS</h2>
        </div>
        <h2 className="text-[28px] font-bold">:</h2>
        <div className="flex flex-col justify-center items-center rounded-full bg-gray-200 w-[60px] h-[60px]">
          <div className="flex">
            <h2 className="font-bold">{timer[0]}</h2>
            <h2 className="font-bold">{timer[1]}</h2>
          </div>
          <h2 className="text-[10px] text-gray-500">HRS</h2>
        </div>
        <h2 className="text-[28px] font-bold">:</h2>
        <div className="flex flex-col justify-center items-center rounded-full bg-gray-200 w-[60px] h-[60px]">
          <div className="flex">
            <h2 className="font-bold">{timer[3]}</h2>
            <h2 className="font-bold">{timer[4]}</h2>
          </div>
          <h2 className="text-[10px] text-gray-500">MINS</h2>
        </div>
        <h2 className="text-[28px] font-bold">:</h2>
        <div className="flex flex-col justify-center items-center rounded-full bg-gray-200 w-[60px] h-[60px]">
          <div className="flex">
            <h2 className="font-bold">{timer[6]}</h2>
            <h2 className="font-bold">{timer[7]}</h2>
          </div>
          <h2 className="text-[10px] text-gray-500">SECS</h2>
        </div>
      </div>
    </div>
  );
};

export default Timer;
