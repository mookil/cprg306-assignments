
"use client"
import React from 'react'
import { useUserAuth } from './_utils/auth-context'



// Essentially, this is a login page for the user to log in.
function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Function for handling signing in with github
    async function handleSignIn() {

    }

    // Function from signing out of this website
    async function handleSignOut() {

    }


  return (
    <div>
        {/* Header Section */}
        <div>
            <h1>Week 9 - Firebase Authentication</h1>
        </div>
        <p>Login Here</p>
        <section>
            <button>Sign in with GitHub</button>
            <button>Register</button>
        </section>
        page
        </div>
  )
}

export default Page