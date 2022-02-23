import {useState, useEffect} from 'react'
import Post from './Post'
import Search from './Search'
import ReactPaginate from "react-paginate"
import FavPosts from './FavPosts'

function PostContainer({currentUser, name}) {
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState([])
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
    fetch("api/posts")
    .then((r) => r.json())
    .then(data => setPosts(data))
  }, [])

  const postsPerPage = 5
  const pagesVisited = pageNumber * postsPerPage
  const pagPosts = posts.slice(pagesVisited, pagesVisited + postsPerPage)

  const filteredPosts = () => {
    if (name === "account") {
      return pagPosts.filter(post => post.username === currentUser.username)
  } else {
      return pagPosts
    }
  }

  const pageCount = Math.ceil(posts.length / postsPerPage)

  const changePage = ({selected}) => {
    setPageNumber(selected)
    window.scrollTo(0, 0)
  }

  const searchPosts = pagPosts.filter(post => post.header.toLowerCase().includes(search.toLocaleLowerCase()))
  
  const renderPosts = filteredPosts().map(post => <Post key={post.id} post={post} currentUser={currentUser} />)

  const renderSearchPosts = searchPosts.map(post => <Post key={post.id} post={post} currentUser={currentUser} />)

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      {search === "" ? renderPosts : renderSearchPosts}
      <br/>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisables"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

export default PostContainer