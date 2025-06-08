import { Outlet } from "react-router-dom"

export function ProvideTheme() {
    return(
    
        <div className="bg-background min-h-screen min-w-screen"> 
            <Outlet/>
        </div>
    )
}



