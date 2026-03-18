"use client";

import { useEffect, useState } from "react";
import type { AuthSession } from "@/utils/types";

const STORAGE_KEY = "image-to-pdf-auth-session";

const GUEST_SESSION: AuthSession = {
  name: "Guest workspace",
  email: "",
  mode: "guest",
};

export function useAuth() {
  const [session, setSession] = useState<AuthSession>(GUEST_SESSION);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const rawSession = window.localStorage.getItem(STORAGE_KEY);
    if (!rawSession) {
      setIsReady(true);
      return;
    }

    try {
      const parsedSession = JSON.parse(rawSession) as AuthSession;
      if (parsedSession.name && parsedSession.mode) {
        setSession(parsedSession);
      }
    } catch (error) {
      console.error("Unable to restore auth session", error);
    } finally {
      setIsReady(true);
    }
  }, []);

  const signIn = (name: string, email: string) => {
    const nextSession: AuthSession = {
      name: name.trim(),
      email: email.trim(),
      mode: "local",
    };

    setSession(nextSession);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSession));
  };

  const continueAsGuest = () => {
    setSession(GUEST_SESSION);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  const signOut = () => {
    setSession(GUEST_SESSION);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  return {
    session,
    isReady,
    isAuthenticated: session.mode === "local",
    signIn,
    continueAsGuest,
    signOut,
  };
}
