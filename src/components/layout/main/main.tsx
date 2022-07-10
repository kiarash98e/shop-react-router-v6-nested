/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'


const main:React.FC<any> = ({children}) => {
  
    return (
        <main 
            className="relative flex-grow"
            style={{
            minHeight: "-webkit-fill-available",
            WebkitOverflowScrolling: "touch",
        }}
        >
            {children}
        </main>
    )
}

export default main
