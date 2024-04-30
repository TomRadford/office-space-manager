import { forwardRef, type InputHTMLAttributes } from "react";
import { AnimatePresence, motion } from "framer-motion";

// We pass the ref to the input element,
// this is necessary for react-hook-form
// to do it's magic 🪄
const TextInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { errorMessage?: string }
>((props, ref) => {
  return (
    <div className="relative">
      <input
        className="invalid:ring-red-500 w-full border-0 placeholder:opacity-50 invalid:ring-1 focus:ring-secondary"
        {...props}
        ref={ref}
      />
      <AnimatePresence>
        {props.errorMessage && (
          // TODO get correct validation feedback
          // from the design team, this one is a placeholder
          // so that the user can see the error message so long
          <div className="absolute -bottom-4 left-3">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "tween" }}
              className=" text-xs text-red"
            >
              {props.errorMessage}
            </motion.p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
});

TextInput.displayName = "TextInput";
export default TextInput;
