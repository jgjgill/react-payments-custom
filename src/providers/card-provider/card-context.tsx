import { createSafeContext } from "../../utils/create-safe-context";
import { Card } from "./card.types";

export const [CardContextProvider, useCardList] =
  createSafeContext<Card[]>("card-provider");
