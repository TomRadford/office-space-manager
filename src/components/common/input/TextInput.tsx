import { forwardRef, type InputHTMLAttributes } from "react";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/utils/classname";
import ErrorMessage from "@/components/common/input/ErrorMessage";

// We pass the ref to the input element,
// this is necessary for react-hook-form
// to do it's magic 🪄
const TextInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { errorMessage?: string }
>((props, ref) => {
  const elementProps = { ...props };
  delete elementProps.errorMessage;
  return (
    <div className="relative">
      <input
        className={cn(
          "w-full border-0 placeholder:opacity-50 focus:ring-secondary",
          { "ring-1 ring-red focus:ring-red": props.errorMessage },
        )}
        {...elementProps}
        ref={ref}
      />
      <AnimatePresence>
        {props.errorMessage && (
          <div className="absolute -bottom-4 left-3">
            <ErrorMessage errorMessage={props.errorMessage} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
});

TextInput.displayName = "TextInput";
export default TextInput;
