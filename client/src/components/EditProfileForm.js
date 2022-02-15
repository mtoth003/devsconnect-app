// import {useState} from 'react'
// import styled from 'styled-components'
// import {FormField, Error} from "../styles"

// function EditProfileForm({currentUser}) {
//   const [isSelected, setIsSelected] = useState(false)
//   return (
//     <div>
// {isSelected ? 
//     <EditFormStyle>
//     <form className="edit-form" onSubmit={handleEdit}>
//     <h2>Edit Your Profile!</h2>
//     <label>
//         Name:
//         <input
//         type="text"
//         className="fix"
//         id="name"
//         placeholder="Update your name..."
//         value={editData.name}
//         onChange={(e) => handleChange(e)}
//         />
//     </label>
//     <label>
//         Username:
//         <input
//         type="text"
//         id="username"
//         className="fix"
//         placeholder="Update your username..."
//         value={editData.username}
//         onChange={(e) => handleChange(e)}
//         />
//     </label>
//     <label>
//         Github Link:
//         <input
//         type="text"
//         id="github"
//         placeholder="Update your Github..."
//         value={editData.github}
//         onChange={(e) => handleChange(e)}
//         />
//     </label>
//     <label>
//         LinkedIn Link:
//         <input
//         type="text"
//         id="linkedin"
//         placeholder="Update your LinkedIn..."
//         value={editData.linkedin}
//         onChange={(e) => handleChange(e)}
//         />
//     </label>
//     <label>
//         Bio:
//         <textarea
//         id="bio"
//         placeholder="Update your bio..."
//         value={editData.bio}
//         onChange={(e) => handleChange(e)}
//         />
//     </label>
//     <label>
//         Profile Photo Link:
//         <input
//         type="text"
//         id="image_url"
//         placeholder="Update your profile photo..."
//         onChange={(e) => handleChange(e)}
//         />
//     </label>
//     <button type="submit">Share!</button>
//     </form>
// </EditFormStyle>
// :
// <EditButtonStyle>
//     <button onClick={handleNewEditClick}>Edit Your Profile</button>
// </EditButtonStyle>

// }
// </div>
//   )
// }

// export default EditProfileForm