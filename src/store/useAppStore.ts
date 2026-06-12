import { create } from 'zustand';

interface AppState {
  isMenuOpen: boolean;
  isInstallPromptVisible: boolean;
  deferredPrompt: any;
  setMenuOpen: (open: boolean) => void;
  setInstallPromptVisible: (visible: boolean) => void;
  setDeferredPrompt: (prompt: any) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: false,
  isInstallPromptVisible: false,
  deferredPrompt: null,
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  setInstallPromptVisible: (visible) => set({ isInstallPromptVisible: visible }),
  setDeferredPrompt: (prompt) => set({ deferredPrompt: prompt }),
}));
