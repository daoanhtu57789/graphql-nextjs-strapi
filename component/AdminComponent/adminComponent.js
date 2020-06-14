import style from "./style.module.css";
import Post from "./Post/post";
import { Button } from "antd";
import { PushpinOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function AdminComponent(props) {
  return (
    <div className={style.admin}>
      <Link href="/addpost">
        <a>
          <Button type="primary">
            <p className={style.add}>
              <PushpinOutlined />
              Thêm Mới Bài Viết
            </p>
          </Button>
        </a>
      </Link>

      {props.posts
        ? props.posts.map((post, index) => {
            return (
              <Post
                key={index}
                post={post}
                handleDelete={(id) => props.handleDelete(id)}
                handleUpdate={(post) => props.handleUpdate(post)}
              />
            );
          })
        : ""}
    </div>
  );
}
