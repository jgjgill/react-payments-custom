import { PropsWithChildren, useState } from "react";
import { CardContextProvider } from "./card-context";
import { Card } from "./card.types";

export function CardProvider({ children }: PropsWithChildren) {
  const [cardData, setCardData] = useState({});

  const onChange = (key: string, value: Card) => {
    setCardData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <CardContextProvider value={{ cardData, onChange }}>
      {children}
    </CardContextProvider>
  );
}
