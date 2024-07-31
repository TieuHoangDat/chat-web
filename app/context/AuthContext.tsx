"use client"

import { SessionProvider } from "next-auth/react"

interface AuthContextPros {
    children: React.ReactNode;
}

export default function AuthContext({
    children
}: AuthContextPros) {
    return <SessionProvider>{children}</SessionProvider>
}