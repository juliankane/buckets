// src/context/ProfileContext.tsx
import { useEffect, useState, createContext, useContext, ReactNode } from "react";
import { useParams } from "react-router-dom";
import { useUserStore } from "@store/userStore";

interface ProfileContextType {
  loading: boolean;
  userExists: boolean;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }
  return context;
};

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const { id } = useParams();
  const { user } = useUserStore();
  const [loading, setLoading] = useState(true);
  const [userExists, setUserExists] = useState(true);

  useEffect(() => {
    if (!user || user.id !== id) {
      setUserExists(false);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/users/${id}/profile`);
        if (!res.ok) throw new Error(`HTTP error! Status ${res.status}`);
        await res.json(); // handle data if needed
      } catch (error) {
        console.error("Profile fetch error", error);
        setUserExists(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, user]);

  return (
    <ProfileContext.Provider value={{ loading, userExists }}>
      {children}
    </ProfileContext.Provider>
  );
};
