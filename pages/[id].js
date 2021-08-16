const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const data = res.json();

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

const DetailsPage = () => {
    return (
        <div>
            <DetailsPage/>
        </div>
    )
}

export default DetailsPage