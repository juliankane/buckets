
import { useUserStore } from "@store/userStore";
import { FC } from "react";
import { Link } from "react-router-dom";

type BucketCardType = {
  name: string;
  description?: string;
  onClick?: () => void;
};

export const BucketCard: FC<BucketCardType> = ({ name, description, onClick }) => {
    const { user } = useUserStore()


  return (
    <Link to={`/${user?.id}/${encodeURIComponent(name)}`}
      className="bg-white rounded-lg shadow-md p-4 w-full aspect-[3/2] transition hover:shadow-lg"
      role={onClick ? "button" : undefined}
      onClick={onClick}
    >
      <div className="space-y-3 h-full flex flex-col justify-center hover:bg-background-secondary rounded-md p-2 transition-colors duration-200">
        <h2 className="text-2xl font-semibold text-gray-800 px-2">{name}</h2>
        {description && (
          <p className="text-gray-600 text-sm px-2">{description}</p>
        )}
      </div>
    </Link>
  );
};