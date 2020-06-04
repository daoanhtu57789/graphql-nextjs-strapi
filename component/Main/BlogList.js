//css
import style from "./style.module.css";
import Blog from "./Blog/Blog";

export default function BlogList() {
  return (
    <div className={style.bloglist}>
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
}
