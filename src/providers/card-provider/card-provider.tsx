import { PropsWithChildren, useState } from "react";
import { CardContextProvider } from "./card-context";
import { Card } from "./card.types";

const mockCardList: Record<string, Card> = {
  a1b2c3d4: {
    키: "a1b2c3d4",
    번호: 1234_5678_1234_5678,
    만료일: { 월: 12, 년: 25 },
    보안코드: 123,
    비밀번호: 1234,
    소유자_이름: "홍길동",
    별칭: "개인 카드",
  },
  e5f6g7h8: {
    키: "e5f6g7h8",
    번호: 8765_4321_8765_4321,
    만료일: { 월: 6, 년: 23 },
    보안코드: 456,
    비밀번호: 5678,
    소유자_이름: "김철수",
    별칭: "회사 카드",
  },
  i9j0k1l2: {
    키: "i9j0k1l2",
    번호: 1122_3344_5566_7788,
    만료일: { 월: 9, 년: 24 },
    보안코드: 789,
    비밀번호: 9876,
    소유자_이름: "이영희",
    별칭: "비상용 카드",
  },
};

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
