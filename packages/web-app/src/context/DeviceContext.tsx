import { createContext, useContext, ReactNode } from 'react';
import { isMobile } from 'react-device-detect';



const DeviceContext = createContext( { isMobile })

export const useDevice = () => useContext( DeviceContext );

export const DeviceProvider = ( { children }: {  children: ReactNode }) => {
    return (
        <DeviceContext.Provider value = {{isMobile}}>
            {children}
        </DeviceContext.Provider>
    )
}