//css
import style from "./style.module.css";
import { Row, Col } from "antd";
import Link from "next/link";
import {
  ReloadOutlined,
  PushpinOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";
export default function Blog(props) {
  return (
    <div className={style.blog}>
      <Link href="/post/[post]" as={`/post/${props.post.title}`}>
        <a>
          <h2>{props.post.title}</h2>
        </a>
      </Link>

      {props.post.authors[0] ? (
        <Row>
          <Col span={7}>Đây là nơi để ảnh đại của bài viết</Col>

          <Col span={17}>
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
            <div className={style.content}>
              <p>{props.post.content}</p>
            </div>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </div>
  );
}
