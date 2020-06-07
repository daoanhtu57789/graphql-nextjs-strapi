//ant
import { Row, Col, Button, Menu } from "antd";
import { useRouter } from "next/router";
import Router from "next/router";
import { ReadOutlined, ShopOutlined } from "@ant-design/icons";
import style from "./style.module.css";
//Link
import Link from "next/link";

export default function Header({ href }) {
  const router = useRouter();
  return (
    <div className={style.header}>
      <Row>
        <Col span={4}></Col>

        <Col span={15}>
          <h1 className={style.h1}>Blog World</h1>
        </Col>

        <Col span={2}>
          <Button className={style.button} type="default">
            <Link href="/login">
              <a>Login</a>
            </Link>
          </Button>
        </Col>
        <Col span={2}>
          <Button className={style.button} type="default">
            <Link href="/signup">
              <a>SignUp</a>
            </Link>
          </Button>
        </Col>
        <Col span={1}></Col>
      </Row>

      <Menu
        theme="light"
        mode="horizontal"
        // defaultSelectedKeys={[router.pathname === "/" ? "1" : "2"]}
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">
          <ReadOutlined />
          <Link href="/">
            <a>Trang Chủ</a>
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <ShopOutlined />
          <Link href="/authors">
            <a>List Bloger</a>
          </Link>
        </Menu.Item>

        <Menu.Item key="3">
          <ShopOutlined />
          <Link href="/">
            <a>Top Blog</a>
          </Link>
        </Menu.Item>

        <Menu.Item key="4">
          <ShopOutlined />
          <Link href="/">
            <a>Top Author</a>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
