import styles from "./TextBox.module.css"

export default function TextBox({ value = "", setValue = () => {}, placeholder = "", type = "text", name = "" }) {
  return (
    <>
      <input
        value={value instanceof Function ? value(name) : value}
        onChange={(e) => setValue(e.target.value)}
        name={name}
        placeholder={placeholder}
        type={type}
        className={styles.input}
      />
    </>
  )
}
