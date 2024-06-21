import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignUpValidation } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Loader } from "lucide-react"
import { Link } from "react-router-dom"




const SignUpForm = () => {
      const  isLoading = false
//define your form 
  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name:"",
      username: "",
      email:"",
      password:""
    },
  })
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignUpValidation>) {
     console.log(values)
  }
  return (
      <Form {...form}>
          <div className="sw:w-420 flex-center flex-col ">
            <img 
            src="/assets/images/logo.svg"  alt="logo"
            />

            <h2 className="h2-bold md:h2-bold pt-5 sm:pt-12 ">Create your account </h2>
            <p className="text-light-3 small-medium md:base-regular mt-2">To use snapgram, please enter your details </p>
          


      <form onSubmit={form.handleSubmit(onSubmit)} 
      className="flex flex-col gap-3 w-full mt-4 ">

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" className="shad-cn" {...field} />
              </FormControl>
            </FormItem>   
          )}
        />


     <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" className="shad-cn" {...field} />
              </FormControl>
            </FormItem>   
          )}
        />

<FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" className="shad-cn" {...field} />
              </FormControl>
              </FormItem>   
          )}
        />

<FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="password" className="shad-cn" {...field} />
              </FormControl>
            </FormItem>   
          )}
        />
        <Button type="submit" className="shad-button_primary">
          {isLoading?( <div className="flex-center gap-2">
           <Loader /> Loading...
          </div>): "Sign-up"}
        </Button>
      </form>
      <p className="text-light-2 text-center text-small-regular mt-2">Already have an account?
        <Link to="/sign-in"  className="text-primary-500 text-small-semibold ml-1">Log in</Link>  </p>
      </div>
    </Form>
  )
}

export default SignUpForm
