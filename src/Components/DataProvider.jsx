import { createContext } from "react";
export const datacontext=createContext(null)

const DataProvider = ({children}) => {

  

    const conveyedData={
        name:"saiful"
    }
    return (
        <div>
            <datacontext.Provider value={conveyedData}>
                {children}

            </datacontext.Provider>
        </div>
    );
};

export default DataProvider;