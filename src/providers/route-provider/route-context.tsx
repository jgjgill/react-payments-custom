import { createSafeContext } from "../../utils/create-safe-context";

export const [RouteProvider, useParams] = createSafeContext<{
  params: Record<string, string>;
}>("route-provider");
