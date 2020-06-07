//css
import style from "./style.module.css";
import Blog from "./Blog/Blog";

export default function BlogList(props) {
  return (
    <div className={style.bloglist}>
      {props.posts.map((post, index) => {
        return <Blog post={post} key={index} />;
      })}
    </div>
  );
}
