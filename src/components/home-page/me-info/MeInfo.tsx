import { GetAboutMe } from "@/type/interface";
import Image from "next/image";
import style from "@/components/home-page/me-info/meInfo.module.css";

const MeInfo = ({ info }: { info: GetAboutMe }) => {
  return (
    <div className={style.upper}>
      <Image
        src={info.image}
        alt={info.key}
        width={200}
        height={200}
        style={{ objectFit: "cover" }}
      />
      <div className={style.lower}>
        <div>{info.key}</div>
        <div>{info.value}</div>
      </div>
    </div>
  );
};

export default MeInfo;
