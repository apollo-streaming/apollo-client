import { useSelector } from 'react-redux';

export function useCurrentState() {
  return useSelector((state) => state.sidebar.state);
}
