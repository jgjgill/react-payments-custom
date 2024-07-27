import { createSafeContext } from "../../utils/create-safe-context";
import { Card } from "./card.types";

export const [CardContextProvider, useCardData] = createSafeContext<{
  cardData: Record<string, Card>;
  onChange: (key: string, value: Card) => void;
}>("card-provider");
