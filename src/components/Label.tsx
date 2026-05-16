import { AllCaps } from "../stories/Label.stories";
import "./Label.css";

interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalize all letters
   */
  allCaps?: boolean;
  /**
   * Font color
   */
  colorText?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Font color
   */
  backgroundColor?: string;
}

const Label = ({
  label,
  size = "normal",
  colorText = "text-secondary",
  allCaps = false,
  backgroundColor,
}: Props) => {
  return (
    <span
      className={`${size} ${colorText} label`}
      style={{ background: backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default Label;
