import React,{ useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export type AuthState = {
  isSignedIn: boolean
  isLoading: boolean
  userId: string | undefined
  userName: string | undefined
  avatarUrl: string | undefined
}

/**
 * useAuthState が返す初期値。
 * Next.js のサーバーサイドレンダリング時もこの値になる。
 */
 const INITIAL_AUTH_STATE: AuthState = {
  isSignedIn: false,
  isLoading: true,
  userId: undefined,
  userName: undefined,
  avatarUrl: undefined,
}

export function useAuthState(): AuthState {
  const [authState, setAuthState] = useState(INITIAL_AUTH_STATE);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), user => {
      if (user) {
        setAuthState({
          isSignedIn: true,
          isLoading: false,
          userId: user.uid,
          userName: user.displayName || undefined,
          avatarUrl : user.photoURL || undefined
        }) 
      } else {
        setAuthState({...INITIAL_AUTH_STATE, isLoading: false})
      }
    })
    return () => unsubscribe()
  }, [])
  return authState
}