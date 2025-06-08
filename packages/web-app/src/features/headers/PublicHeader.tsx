
import {Header} from '@components/@containers/Header';
import { HomeLogo } from '../buttons/HomeLogo';
import ButtonLink from '@components/@ui/ButtonLink';


import { MobileMenu } from '@features/menus/MobileMenu';

export  function PublicHeader() {
    return (
        <Header variant="fixed">
            <div className="flex flex-row w-full items-center justify-between">
                {/* Left container */}
                <div>
                    <HomeLogo logoFill={true} showTitle={true} />
                </div>
                
                <div className="flex items-center gap-4">

                    {/* Visible only on medium and up */}
                    <div className="hidden md:flex gap-4">
                        <ButtonLink to="signin" variant="tertiary" className='hover:underline hover:bg-black-warm/10'>
                        Sign In
                        </ButtonLink>
                        <ButtonLink to="register" variant="tertiary" className='hover:bg-bucket-blue hover:text-white'>
                        Sign Up
                        </ButtonLink>
                    </div>


                    {/* Visible only below md */}
                    <div >
                        <div className="block md:hidden gap-4">
                            <MobileMenu/>
                        </div>
                     
                    </div>
                </div>

            </div>
        </Header>
    );
}