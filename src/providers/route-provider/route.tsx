import { cloneElement } from "react";
import { RouteProvider } from "./route-context";
import { matchPath } from "./match-path";
import { useNavigation } from "../router-provider/router-context";

type RouteProps = {
  path: string;
  component: React.ReactElement;
};

export function Route({ path, component }: RouteProps) {
  const { currentPath } = useNavigation();
  const params = matchPath({ path, currentPath });

  if (params === null) {
    return null;
  }

  return (
    <RouteProvider value={{ params }}>
      {cloneElement(component, { params })}
    </RouteProvider>
  );
}
