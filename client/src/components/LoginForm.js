import React from 'react'
import {useState} from 'react'
import { Button, Error, Input, FormField, Label } from "../styles";

function LoginForm({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    fetch("api/login", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({username, password}),
    }).then((r) => {
      if(r.ok) {
        r.json().then((user) => onLogin(user))
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
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
        <Label htmlFor='password'>Password</Label>
        <Input 
          type="password"
          id="password"
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button variant='fill' color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  )
}

export default LoginForm