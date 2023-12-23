import { forwardRef } from "react";

const Input = forwardRef(({ label, flexDir="col", isTextarea, ...props }, ref) => {
  const inputClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className={`flex flex-${flexDir} gap-1 my-4`}>
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextarea ? (
        <textarea ref={ref} className={inputClasses}></textarea>
      ) : (
        <input ref={ref} {...props} className={inputClasses} />
      )}
    </p>
  );
});

export default Input;
