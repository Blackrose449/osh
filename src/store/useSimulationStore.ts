import { create } from 'zustand';

interface SimulationState {
  activeModule: string | null;
  isLoading: boolean;
  notifications: any[];
  setActiveModule: (module: string | null) => void;
  setLoading: (loading: boolean) => void;
  addNotification: (notification: any) => void;
  removeNotification: (id: string) => void;
}

export const useSimulationStore = create<SimulationState>((set) => ({
  activeModule: null,
  isLoading: false,
  notifications: [],
  setActiveModule: (module) => set({ activeModule: module }),
  setLoading: (loading) => set({ isLoading: loading }),
  addNotification: (notification) =>
    set((state) => ({ notifications: [...state.notifications, notification] })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n: any) => n.id !== id),
    })),
}));
