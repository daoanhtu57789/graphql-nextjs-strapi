//css
import style from "./style.module.css";

export default function Footer() {
  return (
    <div className={style.footer}>
      Copyright © 2020 Đào Anh Tú
      <div className={style.social}>
        <a href="#">Twitter</a>|<a href="#">Facebook</a>|<a href="#">Github</a>
      </div>
    </div>
  );
}
