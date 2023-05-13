import { GetAboutMe } from "@/type/interface";

const getAboutMe = (): GetAboutMe[] => {
  const data = [
    {
      key: "Birth",
      value: "95.12.05",
      image: "/assets/icons/calendar.png",
    },
    {
      key: "Address",
      value: "Incheon",
      image: "/assets/icons/address.png",
    },
    {
      key: "Phone",
      value: "010-4336-5210",
      image: "/assets/icons/featurePhone.png",
    },
    {
      key: "Email",
      value: "enfantgu@gmail.com",
      image: "/assets/icons/mail.png",
    },
    {
      key: "Education",
      value: "Soongsil University",
      image: "/assets/icons/pencil.png",
    },
    {
      key: "GitHub",
      value: "github.com/ParkBig",
      image: "/assets/icons/github.png",
    },
  ];

  return data;
};

export default getAboutMe;
