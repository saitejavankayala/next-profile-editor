// src/lib/zustand.ts
import { create } from 'zustand';

type UIState = {
  toastMessage: string;
  setToastMessage: (msg: string) => void;
  clearToastMessage: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  toastMessage: '',
  setToastMessage: (msg) => set({ toastMessage: msg }),
  clearToastMessage: () => set({ toastMessage: '' }),
}));

type AuthState = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};
export const useAuthStore = create<AuthState>((set) => {
  let initialLoginState = false;

  // Load from localStorage safely
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('loggedIn');
    initialLoginState = stored === 'true';
  }

  return {
    isLoggedIn: initialLoginState,
    hasHydrated: false,
    login: () => {
      localStorage.setItem('loggedIn', 'true');
      set({ isLoggedIn: true });
    },
    logout: () => {
      localStorage.setItem('loggedIn', 'false');
      set({ isLoggedIn: false });
    },
  };
});
