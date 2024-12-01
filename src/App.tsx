import { motion } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [silent, setSilent] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-ios">
      <motion.button
        onClick={() => setSilent(!silent)}
        whileTap={{ scale: 0.95 }}
        animate={{
          background: silent ? 'rgb(255 255 255 / 1)' : 'rgb(0 0 0 / 0.2)',
        }}
        initial={{ background: 'rgb(0 0 0 / 0.2)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 40 }}
        className="size-20 drop-shadow-2xl backdrop-blur-md cursor-pointer focus-visible:outline-none rounded-full grid place-items-center"
      >
        <motion.span
          animate={{
            rotate: silent ? [-15, 0] : [18, 0],
          }}
          initial={false}
          transition={{
            type: 'spring',
            stiffness: silent ? 300 : 1000,
            damping: silent ? 10 : 10,
          }}
          style={{
            originX: '50%',
            originY: '0%',
          }}
          className="relative block overflow-hidden"
        >
          <span className="absolute inset-x-0 flex items-center justify-center top-0.5 ">
            <motion.span
              initial={false}
              animate={{
                background: !silent ? '#ffffff' : '#FE6067',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 40 }}
              className="size-[7px] rounded-full"
            ></motion.span>
          </span>
          <span className="overflow-hidden absolute inset-x-0 -bottom-[0px]">
            <span className=" flex items-center justify-center relative -top-1">
              <motion.span
                animate={{
                  background: !silent ? '#ffffff' : '#FE6067',
                  x: !silent ? [-10, 0] : [6, 0],
                }}
                initial={false}
                transition={{
                  x: {
                    type: 'spring',
                    stiffness: silent ? 300 : 1000,
                    damping: silent ? 10 : 10,
                  },
                }}
                className="size-[7px] rounded-full"
              ></motion.span>
            </span>
          </span>
          <span className="absolute rotate-[135deg] inset-x-0 inset-y-[-3px] grid place-items-center">
            <motion.span
              animate={{
                scaleY: silent ? 1 : 0,
                opacity: silent ? 1 : 0,
              }}
              initial={false}
              style={{
                originX: '0%',
                originY: '100%',
              }}
              transition={{
                delay: silent ? 0.1 : 0,
                type: silent ? 'spring' : 'tween',
                stiffness: silent ? 200 : undefined,
                damping: silent ? 18 : undefined,
                opacity: {
                  duration: silent ? 0.1 : 0.05,
                },
                scaleY: {
                  duration: silent ? 0.1 : 0,
                },
              }}
              className="absolute inset-y-0 h-full grid place-items-center w-1.5 z-10 rounded-full bg-white py-0.5"
            >
              <span className="w-0.5 h-full rounded-full bg-red-200"></span>
            </motion.span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="size-9"
          >
            <motion.path
              d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z"
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
              initial={false}
              animate={{
                fill: !silent ? '#ffffff' : '#FE6067',
                stroke: !silent ? '#ffffff' : '#FE6067',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 40 }}
            />
          </svg>
        </motion.span>
      </motion.button>
    </div>
  );
}
