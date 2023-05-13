import { ReqBody } from "@/type/interface";

const sendContactData = async ({ email, name, message }: ReqBody) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      name: name,
      message: message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

export default sendContactData;
