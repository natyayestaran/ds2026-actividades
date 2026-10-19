import { obtenerToken } from "./sesion";
const API_URL = import.meta.env.VITE_API_URL;
export class ApiError extends Error {
    status;
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
export async function apiFetch(endpoint, options = {}) {
    const token = obtenerToken();
    const headers = {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
    };
    const res = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });
    // Si recibimos un 401 estando autenticados, emitimos el evento de sesión expirada
    if (res.status === 401 && token) {
        window.dispatchEvent(new Event('sesion-expirada'));
    }
    const cuerpo = await res.json().catch(() => null);
    if (!res.ok) {
        throw new ApiError(res.status, cuerpo?.error ?? `Error ${res.status}`);
    }
    return cuerpo;
}
