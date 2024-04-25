import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const ApiContext = createContext();

export default function ApiContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [api, setApi] = useState([]);
    const [myApi, setMyApi] = useState([]);

    const [lindex, setLindex] = useState(0);
    const [size, setSize] = useState(25);
    const [index, setIndex] = useState(0);
    const [page, setPage] = useState(0);
    const [pageIndex, setPageIndex] = useState(1);



    // useEffect(() => {
    //     let existingApiItem = localStorage.getItem("Api");
    //     if (existingApiItem) setApi(JSON.parse(existingApiItem));
    // }, []);

    async function fetchApiData() {
        setLoading(true)
        try {

            const response = await axios.get("http://localhost:4000/api/v1/getApiData");

            if (response && response.data) {
                setApi(response.data);
            } else {
                console.error('Failed to fetch api data');
            }

        } catch (error) {
            console.error('Error:', error);
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchApiData()
        setMyApi(api.slice(index, index + size))
        setLindex((Math.ceil(api.length / size) - 1) * size)
        setPage((Math.ceil(api.length / size)))
    }, [index, size, api.length]);

    const value = {
        loading, setLoading, api, setApi, fetchApiData, lindex, setLindex, myApi, setMyApi, size, setSize, index, setIndex, page, setPage, pageIndex, setPageIndex
    };
    return <ApiContext.Provider value={value}>
        {children}
    </ApiContext.Provider>
}