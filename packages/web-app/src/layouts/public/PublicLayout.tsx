import {PublicHeader} from "@features/headers/PublicHeader"
import { Outlet } from "react-router-dom";


export function PublicLayout() {
    return(
        <>         
            <PublicHeader />
            <main className="pt-30">
                <Outlet/>
            </main>
        </>
    )
}
