import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  return {
    props: { posts: data }
  }
}

export default function Home(props) {
  const posts = props.posts
  return (
    <>
      <Head>
        <title>Blog Homepage</title>
        <meta name="keywords" content="blogging"></meta>
      </Head>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <a className={styles.post}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link href={`/${post.id}`}><a>Read more</a></Link>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
