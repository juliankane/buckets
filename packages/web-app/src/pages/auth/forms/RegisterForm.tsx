import { useEffect, useState} from "react";
import { useForm, SubmitHandler, useWatch } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import {useUserStore} from "@store/userStore"
import { AuthType} from '../../../types/user'
import { GoogleButton } from "@features/buttons/GoogleButton";
import { FormInput } from "../components";
import { Button } from "@components/@base/Button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";



export function RegisterForm () {
    const { control, handleSubmit} = useForm<AuthType>({
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            username: "",
        }, mode: "onTouched"
    })
    const [step, setStep] = useState<number>(0);
    const navigate = useNavigate()
    const [stepTitle, setStepTitle] = useState<string>();

    const [renderStepFrom, setRenderStepForm] = useState<string>("render-slide-right");
    
    useEffect(() => {
        switch (step) {
            case 0: setStepTitle("Sign up")
                 break;
            case 1:
                setStepTitle("Create a password");
            break;
            case 2:
                setStepTitle("Create a username");
                break;
            default:
                break;
    }
    }, [step]);

    const watchStepFields = useWatch({control})


    const setUser = useUserStore((state) => state.setUser);
    const nextStep = () => { if (step < 2 && step >= 0) { 
        setStep(step + 1)
        setRenderStepForm("render-slide-right");

    }};

    const isStepValid = () => {
        switch (step) { 
            case 0: 
                return ( !!watchStepFields.email && /^\S+@\S+\.\S+$/.test(watchStepFields.email) 
                );
            case 1:
                return ( !!watchStepFields.password && !!watchStepFields.confirmPassword && 
                    watchStepFields.password === watchStepFields.confirmPassword &&
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(watchStepFields.password)
                 );
            case 2:
                return (!!watchStepFields.username);
        }
    };

    const prevStep = () => { if (step <= 2 && step >= 0) { 
        setStep(step - 1)
                setRenderStepForm("render-slide-left");
    }};
    
    
    const onSubmit: SubmitHandler<AuthType> = async ( data ) => {
        try {
            const res = await fetch('/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) throw new Error("Signup failed");

            const message = await res.json();
            const user = message.user

            setUser(user);
            navigate(`/${user.id}`);
        } catch (error) {
            console.error("Login error", error);
            alert("Failed to sign in!")
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between py-25 flex-col  flex-1 render-slide-right">
            
                    
             
     
                <label className="text-nowrap text-[2.5rem]  tracking-wider w-full text-center text-text-primary font-semibold whitespace-nowrap">
                    {stepTitle}
                </label>
        
                    
        
   
                <div>
                    {/** Step 1 */}
                    { step === 0 &&
                        <div className={`${renderStepFrom} space-y-2`}>
                            <GoogleButton className="flex justify-center items-center"/>
                            {/** Seperator */}
                             <div className="flex flex-row w-full items-center">
                                <div className="flex-grow -mx-8 h-px bg-text-secondary" />
                                    <span className="mx-12 text-text-primary text-md select-none">
                                        or
                                    </span>
                                <div className="flex-grow -mx-8 h-px bg-text-secondary" />
                            </div>
                    
                            <div className="space-y-3">
                                <FormInput header="email" name="email" control={control}
                                    rules={{
                                        required: true,
                                        pattern: {
                                            value: /^\S+@\S+\.\S+$/,
                                            message: "Invalid email format",
                                        },
                                    }} />
                            </div>
                        </div>}


                    {/**Step 2 */}
                    { step === 1 &&
                        <div className={`${renderStepFrom} space-y-2`}>
                            
                                <FormInput header="password" name="password" control={control}
                                    rules={{
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters long",
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message:
                                        "Password must contain uppercase, lowercase, number, and special character",
                                    },
                                    }}
                                />
                                <FormInput header="re-enter password" name="confirmPassword" control={control}
                                    rules={{
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters long",
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message:
                                        "Password must contain uppercase, lowercase, number, and special character",
                                    },
                                    }}
                                />
                         
                        </div>}
                    {/** Step 3 */}
                    {step === 2 &&
                        <div className={`${renderStepFrom}  space-y-2`}>
                
                                    <FormInput header="Username" name="username" control={control}
                                        rules = {{required: true
                                        }}
                                    />
                    
                        </div> }
                </div>
                
      

                {/** Local footer buttons */}
           
                   <div className="px-10">
                    {(step < 2) && (     
                    
                   
                         
                        <Button  disabled={!isStepValid()} onClick={() => nextStep() } type="button" variant="primary" className="disabled:bg-black-warm h-[2.5em] md:h-[3rem] font-semibold text-xl">
                            Continue
                        </Button>
                        
                            )}


                    {step === 2 && (
                        <Button variant="primary" disabled={!isStepValid()} className="disabled:bg-black-warm  h-[2.5em] md:h-[3rem] font-semibold text-xl">
                            Sign Up
                        </Button>
                    
                    )}

                    {(step > 0) && <Button
                                type="button"
                                onClick={prevStep}
                                variant="icon"
                                className="absolute bottom-5 left-0 size-10 text-text-primary"
                            >
                                <ArrowLeftIcon />
                            </Button>} 
              </div>
            </form>

    )
}