import { createContext, useContext, useState, useEffect } from 'react';
import { apiFetch } from '../services/api';
import { obtenerToken, guardarToken, borrarToken } from '../services/sesion';
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    const [cargando, setCargando] = useState(obtenerToken() !== null);
    const logout = () => {
        borrarToken();
        setUsuario(null);
    };
    useEffect(() => {
        if (!obtenerToken())
            return;
        apiFetch('/auth/yo')
            .then(setUsuario)
            .catch(() => borrarToken())
            .finally(() => setCargando(false));
    }, []);
    useEffect(() => {
        window.addEventListener('sesion-expirada', logout);
        return () => window.removeEventListener('sesion-expirada', logout);
    }, []);
    const login = async (credenciales) => {
        const sesion = await apiFetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify(credenciales),
        });
        guardarToken(sesion.token);
        setUsuario(sesion.usuario);
    };
    const estaAutenticado = usuario !== null;
    const tieneRol = (rol) => usuario?.rol === rol;
    return (<AuthContext.Provider value={{ usuario, cargando, estaAutenticado, tieneRol, login, logout }}>
      {children}
    </AuthContext.Provider>);
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de un <AuthProvider>');
    }
    return context;
}
