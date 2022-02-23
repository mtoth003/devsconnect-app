import styled from 'styled-components'

function Search({search, setSearch}) {

  return (
    <div>
      <SearchContainer>
        <input type="text" placeholder='Search posts' name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </SearchContainer>
    </div>
  )
}

const SearchContainer = styled.div `

display: flex;
justify-content: center;
width: 80%;

input {
      width: 20%;
      margin: 15px;
      height: 40px;
      border: 1px solid black;
      border-radius: 15px;
      box-shadow: 4px 4px lightgrey;
    }

`

export default Search