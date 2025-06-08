import { Logo } from "@assets/index";
import ButtonLink from "@components/@ui/ButtonLink";
import { BucketCard } from "@components/@ui/BucketCard";


export function Home(){
    return (
        // Dev Note: Change Containers xd
                    <div className="container mx-auto space-y-25">
                            <div className="flex text-text-primary flex-col lg:flex-row px-4 items-center gap-10 justify-center mx-auto">
                                <div className="flex flex-col px-3 py-6 w-full max-w-[28em] items-center space-y-4 text-nowrap">
                                        <h1 className="text-[3rem] lg:text-[4rem]">Organize easy.</h1>
                             
                                            <div className="flex text-3xl lg:text-4xl items-center gap-4">
                                  
                                            <div className="space-y-2">
                                                <p>1. Make a bucket</p>
                                                <p>2. Invite your friends</p>
                                            </div>
                                            <Logo className="size-16 lg:size-24 fill-text-primary rotate-15 shrink-0" />
                                        </div>
                                </div>

                                <div className="flex flex-col px-3 py-6 max-w-[28em] w-full gap-6 text-nowrap lg:text-wrap lg:flex-row">
                                    <ButtonLink to="register" variant="primary" className="">Get started</ButtonLink>
                                    <ButtonLink to="register" variant="primary" className="bg-bucket-pink hover:bg-bucket-pink/60">Download</ButtonLink>
                                </div>
                            </div>
                    


                        <div className="flex items-center gap-6 flex-col lg:flex-row">
                            
                            <BucketCard name="My buckets got Lorem"
                                    description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam voluptates
                                        praesentium voluptate rem porro reprehenderit eum. Adipisci eaque a in exercitationem mollitia excepturi.
                                        Minima quos soluta nostrum nulla optio accusamus, veritatis ut iste quod doloremque blanditiis
                                        rerum error beatae unde!`}>
                            </BucketCard>
                            <BucketCard name="Hey, so does mine!" description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam voluptates
                                        praesentium voluptate rem porro reprehenderit eum. Adipisci eaque a in exercitationem mollitia excepturi.
                                        Minima quos soluta nostrum nulla optio accusamus, veritatis ut iste quod doloremque blanditiis
                                        rerum error beatae unde!`}>
                            </BucketCard>
                            <BucketCard name=":("  description={`ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam voluptates
                                        praesentium voluptate rem porro reprehenderit eum. Adipisci eaque a in exercitationem mollitia excepturi.
                                        Minima quos soluta nostrum nulla optio accusamus, veritatis ut iste quod doque blanditiis
                                        rerum error beatae unde!`}>
                            </BucketCard>
                        </div>
                    </div>
            
     
    )
}