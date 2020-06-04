//css
import style from "./style.module.css";
import { Row, Col } from "antd";
import {
  ReloadOutlined,
  PushpinOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";
export default function Blog() {
  return (
    <div className={style.blog}>
      <h2>Đây là tiêu đề bài viết của một bloger</h2>
      <Row>
        <Col span={7}>Đây là nơi để ảnh đại của bài viết</Col>

        <Col span={17}>
          <div className={style.notification}>
            <p>
              <strong className={style.strong}>
                <PushpinOutlined />
                Ngày Đăng Bài
              </strong>
              <strong className={style.strong}>
                <ReloadOutlined /> Ngày Sửa Bài
              </strong>
              <strong className={style.strong}>
                <UserOutlined />
                Tác giả bài viết
              </strong>
              <strong className={style.strong}>
                <CommentOutlined /> số lượng comment
              </strong>
            </p>
          </div>
          <div className={style.content}>
            <p>
              dasdasdasiudbasidbabsdoiasndioaisdbioasdioaiosdbaiobdiabsdiabdsasdadsoadbsonaios
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
