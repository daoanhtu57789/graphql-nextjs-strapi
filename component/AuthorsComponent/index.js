import style from "./style.module.css";
import { Row, Col } from "antd";
import {
  PhoneOutlined,
  UserOutlined,
  HomeOutlined,
  MailOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import Link from "next/link";
export default function AuthorsComponent(props) {
  return (
    <div className={style.author}>
      <Row>
        <Col span={6}></Col>
        <Col span={6}>Đây là nơi để ảnh đại của tác giả</Col>

        <Col span={6}>
          <div>
            <Link href="/author/[author]" as={`/author/${props.author.name}`}>
              <a>
                <strong className={style.strong}>
                  <UserOutlined />
                  Tên :{props.author.name}
                </strong>
              </a>
            </Link>
          </div>
          <div>
            <MailOutlined />
            Email:{props.author.email}
          </div>
          <div>
            <PhoneOutlined />
            Liên Hệ:{props.author.phone}
          </div>
          <div>
            <HomeOutlined />
            Địa Chỉ:{props.author.address}
          </div>
          <div>
            <ReadOutlined />
            Số Lượng Bài Viết:{props.author.posts.length}
          </div>
        </Col>
        <Col span={6}></Col>
      </Row>
    </div>
  );
}
