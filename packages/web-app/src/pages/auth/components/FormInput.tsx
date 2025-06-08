/** Input for forms */ 

import {  useController, UseControllerProps } from "react-hook-form";
import { AuthType } from "../../../types/user"

import { FC } from "react";

type FormInputProps = {
    header?: string | false
} & UseControllerProps<AuthType>


const FormInput: FC<FormInputProps> = ({header=false, ...rest}) => {
    const { field, fieldState } = useController( rest );


     return ( 
        <div className="flex flex-col">  
            {header && 
                <label htmlFor="password" className="text-text-muted">
                    {header}
                </label>}

           
                <input {...field} className={` h-12 rounded-lg border-none bg-background-secondary text-text-primary px-5
                    focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25`}
                />
      

            <div className="min-h-[1.5rem] text-red-500 text-nowrap">
                    {fieldState.error && 
                        <p>{fieldState.error.message}</p>}
            </div>
        </div>
    )
}

export {FormInput}


