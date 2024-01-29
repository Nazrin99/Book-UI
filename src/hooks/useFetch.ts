import {BookEndpoint} from "../service/bookEndpoint";
import {useEffect, useState} from "react";

const username: string = "nazrin"
const password: string = "nazrin0965"

function useFetch<T>(endpoint: BookEndpoint) {
    const [data, setData] = useState<T | undefined>(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(endpoint.url, {
            method: endpoint.method,
            headers: {
                'Authorization': getBasicAuthHeader(),
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Response failed with status ${response.status}`)
            }
            response.json().then(r => {
                setData(JSON.parse(JSON.stringify(r)) as T)
                setLoading(false)
            })
        })
    }, [endpoint.method, endpoint.url])
    

    return [data as T, loading]
}

export const getBasicAuthHeader = () => {
    return `Basic ` + btoa(`${username}:${password}`)
}

export default useFetch;
