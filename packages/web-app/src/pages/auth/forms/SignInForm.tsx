import {useForm, SubmitHandler, useWatch } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import {useUserStore} from "@store/userStore"
import { AuthType } from  "../../../types/user"
import { GoogleButton } from "@features/buttons/GoogleButton";
import {  FormInput } from "../components";
import { Button } from "@components/@base/Button";


export function SignInForm() {
    const { control, handleSubmit } = useForm<AuthType>({
        defaultValues: {
            email: "",
            password: "",
        }, mode: "onTouched" 
    })

    const setUser = useUserStore((state) => state.setUser);
    const setAuthToken = useUserStore((state) => state.setAuthToken)
    const navigate = useNavigate()

    const watchStepFields = useWatch({control})

     const isStepValid = () => {
        return ( !!watchStepFields.email && !!watchStepFields.password) 
            
    };

    const onSubmit: SubmitHandler<AuthType> = async ( data ) => {
        try {
            const res = await fetch('/api/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) throw new Error("Login failed");

            const message = await res.json();
            const user = message.user
            
            setUser(user);
            setAuthToken('bingbong');
            navigate(`/${user.id}`); // use the actual ID now

        } catch (error) {
            console.error("Login error", error);
            alert("Failed to sign in!")
        }
    };
    

    return (


        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between py-25 flex-col h-full w-full flex-1 render-slide-right">
            {/** Google Sign In */}


            <label className="text-nowrap tracking-wider text-[2.5rem] w-full text-center text-text-primary font-semibold whitespace-nowrap">
                Sign In
            </label>
            
            <div>
                <GoogleButton className="flex justify-center items-center"/>
                
                {/** Seperator */}
                <div className="flex flex-row w-full items-center">
                    <div className="flex-grow -mx-8 h-px bg-text-secondary" />
                        <span className="mx-12 text-text-primary text-md select-none">
                            or
                        </span>
                    <div className="flex-grow -mx-8 h-px bg-text-secondary" />
                </div>
                {/** Inputs */}

                
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
                
                    <FormInput header="password" name="password" control={control}
                        rules={{
                            required: true,
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message:
                                "Password must contain uppercase, lowercase, number, and special character",
                            },
                        }}
                    />
                </div>
            </div>

            
            {/** Footer */}
            <div className="px-10">
                <Button disabled={!isStepValid()} type="submit" variant="primary" className="disabled:bg-black-warm  h-[2.5em] md:h-[3rem] font-semibold text-xl">
                    Sign In
                </Button>
            </div>
        </form>

    )
}