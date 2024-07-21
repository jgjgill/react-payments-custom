import { createSafeContext } from "../../utils/create-safe-context";
import { Navigate } from "./router.types";

export const [RouterProvider, useNavigation] = createSafeContext<{
  currentPath: string;
  navigate: Navigate;
}>("router-provider");
