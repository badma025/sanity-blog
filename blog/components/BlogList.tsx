type Props = {
    posts: Post[];
}

function BlogList({posts}: Props) {
console.log(posts.length )
  return (
    <div>
        <hr className="border-[#A7CECB] mb-10" />
    </div>
  )
}

export default BlogList