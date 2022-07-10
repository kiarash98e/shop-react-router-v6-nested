import React,{ createContext } from 'react'
import { shopData } from '../data/data'


interface State {
    displaySidebar: boolean;
    data:any;
}

export const initialState:State = {
    displaySidebar:false,
    data:shopData,
}


type Action = 
| {
    type: "CLOSE_SIDEBAR"
}| {
    type: "OPEN_SIDEBAR"
}| {
    type: "SET_DATA",data:any
}


const uiReducer = ( state:State, action:Action ) => {
    switch (action.type) {
        case "CLOSE_SIDEBAR" : {
            return {
                ...state,
                displaySidebar: false
            }
        }
        case "OPEN_SIDEBAR" : {
            return {
                ...state,
                displaySidebar: true
            }
        }
        case "SET_DATA" : {
            return {
                ...state,
                data: shopData
            }
        }
        default:
            return state
    }
}


const ShopContext = createContext<State | any>(initialState)
ShopContext.displayName = "ShopContext"

export const useShop = () => {
    const context = React.useContext(ShopContext)
    if (context === undefined) {
        throw new Error("ShopContext not found !!!")
    }
    return context
}

export const ShopProvider:React.FC<any> = (props) => {
    
    const [state, dispatch] = React.useReducer(
        uiReducer,
        initialState
    )
    
   

    const openSidebar = () => dispatch({type:"OPEN_SIDEBAR"})
    const closeSidebar = () => dispatch({type:"CLOSE_SIDEBAR"})
    
    const value = React.useMemo(
        () => ({
            ...state,
            openSidebar,
            closeSidebar,
        }),
        [state]    
    )

    return <ShopContext.Provider value={value} {...props} />

}

const ShopMagned:React.FC<any> = ({children}) => {
    return(
        <ShopProvider>{children}</ShopProvider>
    )
}

export default ShopMagned