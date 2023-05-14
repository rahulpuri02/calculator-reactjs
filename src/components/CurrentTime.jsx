import { useEffect, useState } from 'react';

export default function CurrentTime() {
    const [time, setTime] = useState(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true }));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <time className='text-zinc-500 font-normal'>{time}</time>;
}
