
import {
  RegisterForm,
  SignInForm,
  ForgotPasswordForm,
} from "./forms";


import { useLocation} from "react-router-dom";
import { InlineTextLink } from "@components/@ui/InlineTextLink";

import { LogoTitle } from '../../../public/LogoTitle'
import { JSX, useLayoutEffect,  useRef,  useState } from "react";

export function Authenticate() {
  const location = useLocation();
  const [title, setTitle] = useState<string>("Sign In");
  const [form, setForm] = useState<JSX.Element | null>(null);
  const [footer, setFooter] = useState<JSX.Element | null>(null);

  const formRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const path = location.pathname;
    if (path === "/signin") {
      setTitle("Login");
      setForm(

          <SignInForm />
  
      );
      setFooter(
        <>
          
            <div>
              <InlineTextLink to="/register" leadingText="Don't have an account? " linkText="Sign up free!" />
            </div>
            <div>
              <InlineTextLink to="/forgotpassword" linkText="Forgot password?" />
            </div>
        
        </>
      );
    } else if (path === "/register") {
      setTitle("Register");
      setForm(

          <RegisterForm />
   
      );
      setFooter(
        <InlineTextLink to="/signin" leadingText="Already have an account? " linkText="Sign in" />
      );
    } else if (path === "/forgotpassword") {
      setTitle("Forgot Password");
      setForm(

          <ForgotPasswordForm />
  
      );
      setFooter(<InlineTextLink to="/signin" linkText="Back to Sign In" />);
    }
  }, [location.pathname]);

  
  return (
   <div className="container my-auto mx-auto flex flex-col h-screen overflow-hidden border-border rounded-xl shadow-2xl shadow-black/10">
    
        {/* Main container with fixed spacing */}
        <div className="flex pt-30 pb-35 md:py-35 flex-col items-center justify-around flex-1 mx-auto w-full max-w-sm">
            
            {/* Header - fixed height */}
            <div>
                <LogoTitle />
            </div>

                

            {/* Middle - fills remaining space */}


              {form}
      
            <div className="flex flex-col items-center justify-center">
                {footer}
            </div>
  
            {/* Footer - fixed height */}
           
        </div>
    </div>

  );
}


