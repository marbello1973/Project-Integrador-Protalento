import styles from "./Input.module.css";

export interface InputProps {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, type, value, placeholder }: InputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={label}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        id={`input-${label}`}
      />
    </div>
  );
}

export default Input;
