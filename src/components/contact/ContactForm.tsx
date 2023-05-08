import style from "@/components/contact/contactForm.module.css";
import sendContactData from "@/lib/send-contact-data";
import { ReqBody, Status } from "@/type/interface";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Notification from "../ui/Notification";

const ContactForm = () => {
  const [requestStatus, setRequestStatus] = useState<Status>();
  const { handleSubmit, register, setValue } = useForm<ReqBody>();

  const onSubmit = async (formData: ReqBody) => {
    setRequestStatus("pending");

    try {
      await sendContactData({ 
        email: formData.email, 
        name: formData.name, 
        message: formData.message 
      });
      setRequestStatus("success");
      setValue("email", "");
      setValue("message", "");
      setValue("name", "");
    } catch (error) {
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!"
    }
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "Message sent successfully!"
    }
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: "Errorrororor!"
    }
  }  

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error" ) {
      const timer = setTimeout(() => {
        setRequestStatus("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus])

  return (
    <section className={style.contact}>
      <h1>How can i help you?</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.controls}>
          <div className={style.control}>
            <label htmlFor="email">Your Email</label>
            <input {...register("email", { required: true })} type="email" id="email" required />
          </div>
          <div className={style.control}>
            <label htmlFor="name">Your Name</label>
            <input {...register("name", { required: true })} type="text" id="name" required />
          </div>
        </div>
        <div className={style.control}>
          <label htmlFor="message">Your Message</label>
          <textarea {...register("message", { required: true })} id="message" rows={5}></textarea>
        </div>
        <div className={style.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && <Notification title={notification.title} status={notification.status} message={notification.message} />}
    </section>
  )
}

export default ContactForm;
