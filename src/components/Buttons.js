const Button = ({ label, variant = "transparent", ...props }) => {
  const transparentButtonClass = "border-2 text-gray-400";
  const primaryButtonClass = "bg-orange-600 text-white";

  return (
    <button
      title={label}
      {...props}
      className={
        variant === "transparent" ? transparentButtonClass : primaryButtonClass
      }
    >
      {label}
    </button>
  );
};

export default Button;
