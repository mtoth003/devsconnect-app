import {useState} from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router'
import {FormField, Error} from "../styles"

function NewPostForm({currentUser}) {
  const [header, setHeader] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [contentUrl, setContentUrl] = useState("")
  const [likeCount, setLikeCount] = useState(0)
  const [userId, setUserId] = useState(currentUser.id)
  const [errors, setErrors] = useState([])
  const [isSelected, setIsSelected] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/api/posts", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        header,
        description,
        image_url: imageUrl,
        content_url: contentUrl,
        likeCount: 0,
        user_id: userId
      })
    })
  }

  return (
    <div>
      {isSelected ? 
        <FormStyle>
          <form className='post-form' onSubmit={handleSubmit}>
            <h2>Make a New Post!</h2>
            <label>
              Post Header:
                <input 
                  type="text"
                  id="header"
                  value={header}
                  onChange={(e) => setHeader(e.target.value)}
                  // onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
              Post Description:
                <input 
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  // onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
              Post Image:
                <input 
                  type="text"
                  id="image_url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  // onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
              Post Media Link:
                <input 
                  type="text"
                  id="content_url"
                  value={contentUrl}
                  onChange={(e) => setContentUrl(e.target.value)}
                  // onChange={(e) => handleChange(e)}
                />
            </label>
            <button type="submit">Share!</button>
            <button onClick={() => setIsSelected(false)}>Cancel</button>
          </form>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
        </FormField>
        </FormStyle>
        :
        <div className='edit-button'>
          <ButtonStyle>
            <button onClick={() => setIsSelected(true)}>Make a New Post!</button>
          </ButtonStyle>
        </div>
      }
    </div>
  )
}

const FormStyle = styled.div`

display: flex;
justify-content: center;

    h2 {
        font-size: 24px;
        margin: 2px;
    }


    form {
        width: 40%;
        margin: 10px;
        padding: 10px;
        border-radius: 15px;
        background-color: black;
        color: white;
        font-weight: bold;
        box-shadow: 7px 7px grey;
    }


    label {
        font-size: 16px;
        justify-content: left;
    }

    textarea {
        resize: none;
        display: block;
        margin: auto;
        width: 90%;
        height: 120px;
        font-family: arial;
        border-radius: 5px;
        position: relative;
        right: 5px;
        padding: 5px;
    }

    input {
        display: block;
        justify-content: center;
        margin: auto;
        margin: 0px;
        position: relative;
        left: 20px;
        width: 90%;
        font-family: arial;
        border-radius: 5px;
        font-size: 12px;
        text-shadow: none;
        height: 20px;
        background-color: white;
        padding: 5px;
    }

    #img {
        text-align-last: center;
        margin: auto;
        padding: 5px;
        font-weight: bold;
    }

    button {
        background-color: white;
        border: none;
        color: black;
        font-weight: bold;
        padding: 8px 16px;
        border-radius: 10px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
      }

`

const ButtonStyle = styled.div`
    
button {
    background-color: black;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 10px;
    text-decoration: none;
    margin: 9px 6px;
    cursor: pointer;
    box-shadow: 5px 5px grey;
    /* position: relative; */
    bottom: 25px;
    float: right
}

`

export default NewPostForm