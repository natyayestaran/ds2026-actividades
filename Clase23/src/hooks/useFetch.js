import { useEffect, useState } from 'react';
import { apiFetch } from '../services/api';
export default function useFetch(endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        let cancelado = false;
        apiFetch(endpoint)
            .then((res) => {
            if (!cancelado)
                setData(res);
        })
            .catch((err) => {
            if (!cancelado)
                setError(err.message);
        })
            .finally(() => {
            if (!cancelado)
                setLoading(false);
        });
        return () => {
            cancelado = true;
        };
    }, [endpoint]);
    return { data, loading, error };
}
