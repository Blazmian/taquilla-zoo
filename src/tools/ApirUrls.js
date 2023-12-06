import { createContext } from "react";

const host = 'https://apitaquilla-production.up.railway.app/api/'

export const ApiUrls = createContext({
    // Sales
    createSale: host + 'ventas',

    // Offers
    getOffers: host + 'promocion',
    
})