import style from "@/components/ui/notification.module.css";
import { NotificationProps } from "@/type/interface";
import ReactDOM  from "react-dom";

const Notification = ({ title, message, status }: NotificationProps) => {

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = style.success;
  }

  if (status === 'error') {
    statusClasses = style.error;
  }

  const cssClasses = `${style.notification} ${statusClasses}`;

  return ReactDOM.createPortal((
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ), document.getElementById("portal") as HTMLElement);
}

export default Notification;
