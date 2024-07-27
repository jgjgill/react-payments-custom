import { useReducer } from "react";
import { useCardData } from "../providers/card-provider/card-context";
import { useParams } from "../providers/route-provider/route-context";
import { useNavigation } from "../providers/router-provider/router-context";

type CardLabel = {
  키: string;
  번호_1: string;
  번호_2: string;
  번호_3: string;
  번호_4: string;
  만료일_월: string;
  만료일_년: string;
  보안코드: string;
  비밀번호_1: string;
  비밀번호_2: string;
  소유자_이름: string;
  별칭: string;
};

type CardAction = { type: keyof CardLabel; payload: string };

function reducer(state: CardLabel, action: CardAction) {
  return { ...state, [action.type]: action.payload };
}

export function splitChunks(str: string, chunkSize: number) {
  const chunks = [];

  // 16글자보다 짧으면 남은 부분을 빈 문자열로 채움
  str = str.padEnd(16, "");

  for (let i = 0; i < 16; i += chunkSize) {
    const chunk = str.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  // 배열의 길이를 4로 맞추기 위해 빈 문자열 추가
  while (chunks.length < 4) {
    chunks.push("");
  }

  return chunks;
}

function EditCard() {
  const { navigate } = useNavigation();
  const { params } = useParams();
  const { cardData, onChange } = useCardData();
  const card = cardData[params.cardId] ?? {};

  const [번호_1, 번호_2, 번호_3, 번호_4] = splitChunks(
    String(card["번호"] ?? ""),
    4
  );

  const [비밀번호_1 = "", 비밀번호_2 = ""] = String(card["비밀번호"] ?? []);
  const [만료일_월, 만료일_년] = Object.values(
    card["만료일"] ?? { 년: "", 월: "" }
  ).map(String);

  const cardLabelData: CardLabel = {
    보안코드: String(card["보안코드"] ?? ""),
    소유자_이름: card["소유자_이름"] ?? "",
    키: card["키"],
    별칭: card["별칭"],
    번호_1,
    번호_2,
    번호_3,
    번호_4,
    만료일_월,
    만료일_년,
    비밀번호_1,
    비밀번호_2,
  };

  const [cardLabel, dispatch] = useReducer(reducer, cardLabelData);

  return (
    <div className="root">
      <div className="app">
        <h3 className="page-title">
          <button onClick={() => navigate("/")}>&#60;</button>
          <span>카드 추가</span>
        </h3>
        <div className="card-box">
          <div className="empty-card">
            <div className="card-top"></div>
            <div className="card-middle">
              <div className="small-card__chip"></div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom__info">
                <span className="card-text">{cardLabel["소유자_이름"]}</span>
                <span className="card-text">
                  {`${cardLabel["만료일_월"] || "MM"} / ${
                    cardLabel["만료일_년"] || "YY"
                  }`}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">카드 번호</span>
          <div className="input-box">
            <input
              className="input-basic"
              type="text"
              onChange={(e) => {
                if (e.target.value.length > 4) {
                  return;
                }

                const payload = e.target.value;
                dispatch({ type: "번호_1", payload });
              }}
              value={cardLabel["번호_1"]}
            />
            <input
              className="input-basic"
              type="text"
              onChange={(e) => {
                if (e.target.value.length > 4) {
                  return;
                }

                const payload = e.target.value;
                dispatch({ type: "번호_2", payload });
              }}
              value={cardLabel["번호_2"]}
            />
            <input
              className="input-basic"
              type="password"
              onChange={(e) => {
                if (e.target.value.length > 4) {
                  return;
                }

                const payload = e.target.value;
                dispatch({ type: "번호_3", payload });
              }}
              value={cardLabel["번호_3"]}
            />
            <input
              className="input-basic"
              type="password"
              onChange={(e) => {
                if (e.target.value.length > 4) {
                  return;
                }

                const payload = e.target.value;
                dispatch({ type: "번호_4", payload });
              }}
              value={cardLabel["번호_4"]}
            />
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">만료일</span>
          <div className="input-box w-50">
            <input
              className="input-basic"
              type="text"
              placeholder="MM"
              onChange={(e) => {
                if (e.target.value.length > 2) {
                  return;
                }

                const payload = e.target.value;
                dispatch({ type: "만료일_월", payload });
              }}
              value={cardLabel["만료일_월"]}
            />
            <input
              className="input-basic"
              type="text"
              placeholder="YY"
              onChange={(e) => {
                if (e.target.value.length > 2) {
                  return;
                }

                const payload = e.target.value;
                dispatch({ type: "만료일_년", payload });
              }}
              value={cardLabel["만료일_년"]}
            />
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">카드 소유자 이름(선택)</span>
          <input
            type="text"
            className="input-basic"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            onChange={(e) => {
              if (e.target.value.length > 30) {
                return;
              }

              const payload = e.target.value;
              dispatch({ type: "소유자_이름", payload });
            }}
            value={cardLabel["소유자_이름"]}
          />
        </div>
        <div className="input-container">
          <span className="input-title">보안코드(CVC/CVV)</span>
          <input
            className="input-basic w-25"
            type="password"
            onChange={(e) => {
              if (e.target.value.length > 3) {
                return;
              }

              const payload = e.target.value;
              dispatch({ type: "보안코드", payload });
            }}
            value={cardLabel["보안코드"]}
          />
        </div>
        <div className="input-container">
          <span className="input-title">카드 비밀번호</span>
          <input
            className="input-basic w-15"
            type="password"
            onChange={(e) => {
              if (e.target.value.length > 1) {
                return;
              }

              const payload = e.target.value;
              dispatch({ type: "비밀번호_1", payload });
            }}
            value={cardLabel["비밀번호_1"]}
          />
          <input
            className="input-basic w-15"
            type="password"
            onChange={(e) => {
              if (e.target.value.length > 1) {
                return;
              }

              const payload = e.target.value;
              dispatch({ type: "비밀번호_2", payload });
            }}
            value={cardLabel["비밀번호_2"]}
          />
          <input
            className="input-basic w-15"
            type="password"
            disabled
            value="*"
          />
          <input
            className="input-basic w-15"
            type="password"
            disabled
            value="*"
          />
        </div>
        <button
          className="button-box"
          onClick={() => {
            const {
              번호_1,
              번호_2,
              번호_3,
              번호_4,
              만료일_월,
              만료일_년,
              보안코드,
              소유자_이름,
              비밀번호_1,
              비밀번호_2,
            } = cardLabel;

            const 번호 = Number(번호_1 + 번호_2 + 번호_3 + 번호_4);
            const 만료일 = { 월: Number(만료일_월), 년: Number(만료일_년) };
            const 비밀번호 = Number(비밀번호_1 + 비밀번호_2);

            onChange(params.cardId, {
              ...card,
              번호,
              만료일,
              비밀번호,
              보안코드: Number(보안코드),
              소유자_이름,
              키: params.cardId,
            });

            navigate(`/edit-card/${params.cardId}/complete-card`);
          }}>
          <span className="button-text">다음</span>
        </button>
      </div>
    </div>
  );
}

export default EditCard;
