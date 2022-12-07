import React, { useEffect } from 'react'

export const Login = ({ name }: { name: string}) => {
  console.log("login")

  useEffect(() => {
    console.log(`login : use Effect : ${name}`)
  }, [name])

  return <div>Hello {name}</div>
}