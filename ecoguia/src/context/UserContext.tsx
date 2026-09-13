import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { UserData } from '../types';

// Dados estáticos do usuário logado
const dadosUsuario: UserData = {
  nome: 'Julio César',
  nivel: 4,
  pontos: 800,
  pontosMax: 1000,
  co2Evitado: '12.5 kg',
  residuosDesviados: '8.2 kg',
  diasOfensiva: 15,
};

// Tipagem do contexto
interface UserContextType {
  usuario: UserData;
}

// Criação do contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// Componente Provider
export function UserProvider({ children }: { children: ReactNode }) {
  const value = useMemo(() => ({ usuario: dadosUsuario }), []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// Hook personalizado para usar o contexto
export function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
}
