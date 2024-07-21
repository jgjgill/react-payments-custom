import { PropsWithChildren, useEffect, useState } from "react";
import { Navigate } from "./router.types";
import { RouterProvider } from "./router-context";

export function Router({ children }: PropsWithChildren) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate: Navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return (
    <RouterProvider value={{ currentPath, navigate }}>
      {children}
    </RouterProvider>
  );
}
