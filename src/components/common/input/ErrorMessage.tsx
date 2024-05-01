import { motion } from "framer-motion";

/**
 * @todo get correct validation feedback
 * from the design team, this one is a placeholder
 * so that the user can see the error message so long
 */
const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ type: "tween" }}
      className=" text-xs text-red"
    >
      {errorMessage}
    </motion.p>
  );
};

export default ErrorMessage;
