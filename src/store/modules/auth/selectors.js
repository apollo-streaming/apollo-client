import { useSelector } from 'react-redux';

export function useJWT() {
  return useSelector((state) => state.auth.jwt);
}

export function useUsername() {
  return useSelector((state) => state.auth.username);
}
