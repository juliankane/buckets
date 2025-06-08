

type User = {
    id: string;
    name: string;
    email: string;
}

type UserProfile = {
    id: string;
    name: string;
    email: string
    settings: {
        "light-mode": boolean;
    };
}

export type {User, UserProfile}



// Authorization fields 
export type AuthType = {
    id?: string
    email?: string
    password?: string
    confirmPassword?: string
    username?: string
}

export type FormStepRefType = { prevStep: () => void };