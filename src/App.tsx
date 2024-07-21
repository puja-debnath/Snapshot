import "./globals.css"
import {Routes,Route} from "react-router-dom"
import SigninForm from "./__auth/forms/SigninForm"
import SignUpForm from "./__auth/forms/SignUpForm"
import { Home } from "./__root/pages"
import AuthLayout from "./__auth/AuthLayout"
import RootLayout from "./__root/RootLayout"
import { Toaster } from "@/components/ui/toaster"


const App = () => {
  return (
   <main>
     <Routes>
        {/* { public routes} */}
        <Route element={<AuthLayout />} >
        <Route path="/sign-in"  element={<SigninForm />} />
        <Route path="/sign-up"  element={<SignUpForm />} />
        </Route>
      

       {/* { private routes} */}
       <Route  element={ <RootLayout />}>
       <Route  index element = {<Home/>}/>

       </Route>
     </Routes>


     <Toaster />
   </main>
  )
}

export default App