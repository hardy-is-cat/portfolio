import { motion } from "motion/react";

import { LuMailCheck } from "react-icons/lu";
import { BiErrorAlt } from "react-icons/bi";
import { IconContext } from "react-icons";

function Toast({
  message,
  state,
}: {
  message: string;
  state: "success" | "fail";
}) {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      className={`${state === "success" ? "bg-green-600" : "bg-rose-700"} fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-lg px-10 py-4 text-center text-white`}
    >
      <IconContext.Provider value={{ className: "w-5 h-5 inline-block mr-2" }}>
        {state === "success" ? <LuMailCheck /> : <BiErrorAlt />}
      </IconContext.Provider>
      {message}
    </motion.div>
  );
}

export default Toast;
