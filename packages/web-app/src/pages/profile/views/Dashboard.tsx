import { BucketCard } from "@components/@ui/BucketCard";

export default function Dashboard() {

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
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
    );
};