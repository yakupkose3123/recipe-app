import Styles from "./Form.module.css";
import { useState } from "react";

const Form = () => {
  // const [name, setname] = useState("YAKUP");
  // const [password, setPassword] = useState("Adana1903");

  const handleSubmit = () => {
    /* ({name}.toUpperCase() === "YAKUP" && {password} === "Adana1903")
      ?setPasswordIsDone(!passwordIsDone)
      :alert("PAROLA YANLIŞ")
     */
    // console.log(name, password);
  }

  return (
    <form className={Styles.form} onSubmit = {handleSubmit}>
      <input
        type="text"
        name="username"
        id="username"
        // value=""
        // onChange = {(e)=>setname(e.target.value)}
        placeholder="USERNAME"
      />
      <input
        type="password"
        name="password"
        id="password"
        // onChange = {()=>setPassword()}
        placeholder="PASSWORD"
      />
      <button type="submit">LOGIN</button>
    </form>
  );
};

export default Form;
