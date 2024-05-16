'use client'
import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'

const LoginPage = () => {
const {data} = useSession()
console.log(data?.user?.name);


  

  return (
    <h1>salom</h1>
    // <div>
    //    <Button onClick={auth}></Button>
    // </div>
  )
}

export default LoginPage