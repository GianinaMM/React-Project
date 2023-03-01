import { Leftpage } from "./Leftpage/Leftpage";
import { Newsfeed } from "./Newsfeed/Neewsfeed";
import { Rightpage } from "./Rightpage/Rightpage";
import styles from "./StartingPage.module.scss";
import { useFetch } from "../../hooks/useFetch";

export function StartingPage() {
  // const posts = useFetch("./Newsfeed/assets/mockPostData.json");
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <section className={styles.mainContainer}>
      <Leftpage></Leftpage>

      <div className={styles.newsfeed}>
        {posts &&
          posts.map((post) => {
            return <Newsfeed postData={post} key={post.id}></Newsfeed>;
          })}
      </div>

      <Rightpage></Rightpage>
    </section>
  );
}
