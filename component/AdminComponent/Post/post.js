import style from "./style.module.css";
import { Row, Col, Button } from "antd";
import Link from "next/link";
import {
  ReloadOutlined,
  PushpinOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";
export default function Post(props) {
  const onClickDelete = function (id) {
    props.handleDelete(id);
  };

  const onClickUpdate = function (post) {
    props.handleUpdate(post);
  };
  return (
    <div>
      {props.post.authors[0] ? (
        <div className={style.post}>
          <Row>
            <Col span={7}>Đây là nơi để ảnh đại của bài viết</Col>

            <Col span={12}>
              <Link href="/post/[post]" as={`/post/${props.post.title}`}>
                <a>
                  <h2>{props.post.title}</h2>
                </a>
              </Link>
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

                  <strong className={style.strong}>
                    <UserOutlined />
                    {props.post.authors[0].name}
                  </strong>

                  <strong className={style.strong}>
                    <CommentOutlined /> số lượng comment
                  </strong>
                </p>
              </div>
              <div className={style.content}>
                <p>{props.post.content}</p>
              </div>
            </Col>
            <Col span={5}>
              <div className={style.edit}>
                <Button
                  type="primary"
                  onClick={() => onClickUpdate(props.post)}
                >
                  Sửa
                </Button>
              </div>
              <div className={style.delete}>
                <Button
                  type="ghost"
                  onClick={() => onClickDelete(props.post.id)}
                >
                  Xóa
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
