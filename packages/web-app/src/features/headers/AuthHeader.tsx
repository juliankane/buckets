
import { Header } from "@components/@containers/Header";
import { HomeLogo } from "../buttons/HomeLogo";
import { Button } from "@components/@base/Button";
import { Bars3Icon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function AuthHeader(){
    return (
        <Header className="invisible md:visible"variant="fixed">
            <div className="flex flex-row w-full items-center px-2 justify-between">
                <div className="invisible md:visible">
                    <HomeLogo logoFill={false} showTitle={false} />
                </div>
        
                <div className="flex items-center space-x-2">
                    <div className="invisible md:visible">
                        <Link to={"/help"} className="hover:cursor-pointer flex items-center">
                            <QuestionMarkCircleIcon className="w-12 h-12 text-text-secondary"/>
                        </Link>
                    </div>

                    <Button variant="icon">
                        <Bars3Icon className=''/>
                    </Button>
                </div>
                 
            </div>
        </Header>
    )
}