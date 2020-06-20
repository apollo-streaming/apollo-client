import { useSelector } from 'react-redux';

export function useIsSidebarOpened() {
  return useSelector((state) => state.sidebar.opened);
}

export function useCurrentState() {
  return useSelector((state) => state.sidebar.state);
}
