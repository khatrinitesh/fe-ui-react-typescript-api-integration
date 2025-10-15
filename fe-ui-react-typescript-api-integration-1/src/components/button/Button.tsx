import { FaSpinner } from "react-icons/fa";
import type { ButtonProps } from "../../interface";

const Button = ({
  isDisabled = false,
  isLoading = false,
  isEnabled = true,
  className = "",
  children,
  iconBefore,
  iconAfter,
  onClick,
}: ButtonProps) => {
  // Conditional classNames based on the props
  const buttonClassNames = `cursor-pointer relative inline-flex items-center justify-center p-2 rounded-md text-white bg-blue-600 
  ${
    isDisabled || !isEnabled
      ? "opacity-50 cursor-not-allowed"
      : "hover:bg-blue-700"
  } 
  ${className} no-underline w-[100px] min-w-[150px] `; // Fixed width range

  // Button loading spinner style
  const loadingSpinner = isLoading && (
    <FaSpinner className="animate-spin text-white mr-2" size={16} />
  );

  return (
    <button
      className={buttonClassNames}
      onClick={onClick}
      disabled={isDisabled || !isEnabled}
    >
      {/* Before Icon */}
      {iconBefore && !isLoading && <span className="mr-2">{iconBefore}</span>}

      {/* Loading Spinner */}
      {loadingSpinner}

      {/* Button Text (children) */}
      <span>{children}</span>

      {/* After Icon */}
      {iconAfter && !isLoading && <span className="ml-2">{iconAfter}</span>}
    </button>
  );
};

export default Button;
