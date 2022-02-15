import {useState} from 'react'
import {Button, Error, Input, FormField, Label, Textarea} from "../styles"

function SignUpForm({onLogin}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [github, setGithub] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [bio, setBio] = useState("")
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("api/signup", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
        image_url: imageUrl,
        github,
        linkedin,
        bio,
      }),
    }).then((r) => {
      setIsLoading(false);
      if(r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor='first_name'>First Name</Label>
        <Input 
          type="text"
          id="first_name"
          autoComplete='off'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor='last_name'>Last Name</Label>
        <Input 
          type="text"
          id="last_name"
          autoComplete='off'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor='username'>Username</Label>
        <Input 
          type="text"
          id="username"
          autoComplete='off'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor='email'>Email</Label>
        <Input 
          type="text"
          id="email"
          autoComplete='off'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor='password'>Password</Label>
        <Input 
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='current-password'
        />
      </FormField>
      <FormField>
        <Label htmlFor='password'>Confirm Password</Label>
        <Input 
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete='current-password'
        />
      </FormField>
      <FormField>
        <Label htmlFor='imageUrl'>Profile Image</Label>
        <Input 
          type="text"
          id="image_url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor='github'>Github</Label>
        <Input 
          type="text"
          id="github"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor='linkedin'>LinkedIn</Label>
        <Input 
          type="text"
          id="linkedin"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor='bio'>Bio</Label>
        <Textarea 
          rows="3"
          id="bio"
          placeholder="Provide some info about yourself"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default SignUpForm