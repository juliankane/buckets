import { useState } from "react";
import {useForm, SubmitHandler, useWatch } from "react-hook-form"
import { AuthType } from "../../../types/user"
import { InlineTextLink } from "@components/@ui/InlineTextLink"
import {  FormInput } from "../components";
import { Button } from "@components/@base/Button";

export function ForgotPasswordForm () {
    const { control, handleSubmit } = useForm<AuthType>({
        defaultValues: {
            email: "",
        }, mode: "onTouched" })
    const [confirmed, setConfirmed] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false);

    const watchStepFields = useWatch({control})

    const isStepValid = () => {
        return  !!watchStepFields.email && /^\S+@\S+\.\S+$/.test(watchStepFields.email) 
    };

    

  const onSubmit: SubmitHandler<AuthType> = async ( data ) => {
        try {
            const res = await fetch('/api/users/resetpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) throw new Error("Forgot Password failed!");
            const message = await res.json();
            console.log(message)
            console.log(error)
            setError(false)
            setConfirmed(true)

        } catch (error) {
            setError(true)
            console.log(error)
        }
    };



    return (

            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between py-25   flex-col h-full w-full flex-1 render-slide-right">

               
                <span className="text-center ">
                        <label className="text-nowrap text-[2.5rem] w-full text-center text-text-primary tracking-wider font-semibold whitespace-nowrap">
                            Forgot Password?
                        </label>
                    <p className="text-lg text-text-secondary max-w-[80%] text-center mx-auto">
                        Enter your email address and we will send you a link with instructions
                    </p>
                </span>


                <div className="space-y-2">
                    <FormInput header="email" name="email" control={control} 
                        rules={{ 
                            required: true,
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid email format",
                            },
                        }} 
                    />
                </div>
             

                {/** Footer */}
                <div className="px-10">
                    <Button disabled={!isStepValid()} type="submit" variant="primary" className="disabled:bg-black-warm h-[2.5em] md:h-[3rem] font-semibold text-xl">
                       Send
                    </Button>
                </div>


            </form>    







  )
}