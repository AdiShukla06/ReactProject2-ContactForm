import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
    useState
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    // let name = "anshu";
    // let email = "anshu@gmail.com";
    // let text = "hi here how are you?";

    const onSubmit = (event) => {
        event.preventDefault()

        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)

        // name = event.target[0].value
        // email = event.target[1].value
        // text = event.target[2].value
        console.log({name, email, text})
        // console.log("name: ", event.target[0].value)
        // console.log("email: ", event.target[1].value)
        // console.log("text: ", event.target[2].value)
    }



    // const onViaCallSubmit = () => {
    //     alert("Calling...");
    // };




  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button 
        //   onClick = {onViaCallSubmit}
          text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button

          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Message</label>
            <textarea name="text" rows = "8"></textarea>
          </div>
          <div style={{
            display : "flex", justifyContent : "end"
          }}>
          <Button
        //   isOutline={true}
          text="SUBMIT BUTTON"
        //   icon={<HiMail fontSize="24px" />}
        />
          </div>
          <div> {name + ", " + email + ", " + text}    </div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="/images/service.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
