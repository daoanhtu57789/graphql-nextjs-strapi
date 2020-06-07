import style from "./style.module.css";
import {
  ReloadOutlined,
  PushpinOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import Link from "next/link";
export default function PostComponent(props) {
  return (
    <div className={style.post}>
      <h2>{props.post.title}</h2>
      <div className={style.notification}>
        <p>
          <strong className={style.strong}>
            <PushpinOutlined />
            {props.post.createday}
          </strong>
          <strong className={style.strong}>
            <ReloadOutlined />{" "}
            {props.post.updateday ? props.post.updateday : ""}
          </strong>
          <Link
            href="/author/[author]"
            as={`/author/${props.post.authors[0].name}`}
          >
            <a>
              <strong className={style.strong}>
                <UserOutlined />
                {props.post.authors[0].name}
              </strong>
            </a>
          </Link>
          <strong className={style.strong}>
            <CommentOutlined /> số lượng comment
          </strong>
        </p>
      </div>
      <div className={style.content}>{props.post.content}</div>
    </div>
  );
}
