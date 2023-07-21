'use client'

import { useState } from "react";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";

import Headerr from "./components/Headerr";
import SignInPage from "../signin/page";
const inter=Inter({subsets:['latin']})

export default function DashboardLayout({children}) {
   
      const [isLogged, setIsLogged] = useState(false);
  return (
    
      <main className="" style={{ backgroundColor: "#EEE" }}>
       {isLogged ? <SignInPage/>: (<Sidebar><Headerr/>{children}</Sidebar>) } 
      </main>

    )
  }