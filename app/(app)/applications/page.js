"use client";
import { useState } from "react";

export default function ApplicationsPage(){
  const [company,setCompany] = useState("");
  const [role,setRole] = useState("");
  const [applications,setApplications] = useState([]); //applications is a list


  
  return( <main>
    <h1> Applications </h1>
    <form>
      <label> Company</label>
       <input type = "text" value = {company} onChange={(e)=>setCompany(e.target.value)}/>
    </form>
  </main>);
}
