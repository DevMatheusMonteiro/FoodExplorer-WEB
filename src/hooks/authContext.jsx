import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const res = await api.post("sessions", { email, password });

      const user = res.data;

      localStorage.setItem("@foodExplorer:user", JSON.stringify(user));

      const role = await validateUser();

      setData({ user, role });
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  async function signOut() {
    setData({});

    for (const key in localStorage) {
      if (key.includes("@foodExplorer")) {
        localStorage.removeItem(key);
      }
    }

    await api.delete("sessions");
  }

  async function signUp({ name, email, password }) {
    try {
      await api.post("users", { name, email, password });
      await signIn({ email, password });
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  async function updateProfile(user) {
    try {
      await api.put("/users", user);
      delete user.password;
      delete user.currentPassword;
      localStorage.setItem("@foodExplorer:user", JSON.stringify(user));
      setData({ user, role: data.role });
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert("Não foi possível atualizar!");
      }
    }
  }

  async function validateUser() {
    try {
      const res = await api.get("users/validate");

      return res.data.role;
    } catch (e) {
      signOut();
    }
  }

  window.onclick = () => {
    const user = JSON.parse(localStorage.getItem("@foodExplorer:user"));
    if (user || data.user) {
      validateUser();
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@foodExplorer:user")) ?? {};

    const properties = Object.keys(user ?? {});

    if (user && properties.length > 0) {
      validateUser().then((data) => {
        setData({ user: user, role: data });
      });
    } else {
      signOut();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signUp,
        updateProfile,
        user: data.user,
        role: data.role,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
