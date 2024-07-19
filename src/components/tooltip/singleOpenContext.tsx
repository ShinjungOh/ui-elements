import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react";

const SingleOpenContext = createContext<[string | null, Dispatch<SetStateAction<string | null>>]>([
    null,
    () => {
    }
]);

const SingleOpenContextProvider = ({children}: {
    children: ReactNode;
}) => {
    const state = useState<string | null>(null);

    return <SingleOpenContext.Provider value={state}>
        {children}
    </SingleOpenContext.Provider>
}

export default SingleOpenContextProvider;

export const useSingleOpen = (id: string) => {
    const [currentId, dispatch] = useContext(SingleOpenContext);

    return [id === currentId, dispatch] as const;
}


// 리코일, 조타이 등 전역상태관리 라이브러리를 사용하면 더욱 간편하게 이용 가능
