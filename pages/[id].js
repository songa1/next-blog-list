import styles from '../styles/Home.module.css';
import Link from 'next/link'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    const paths = data.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    const data = await res.json();

    return {
        props: {post: data}
    }
}

const DetailsPage = (props) => {
    const post = props.post
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href='/'><a className={styles.btn}>Back to all posts</a></Link>
        </div>
    )
}

export default DetailsPage 