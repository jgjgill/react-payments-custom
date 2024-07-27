import { useState } from "react";
import { useCardData } from "../providers/card-provider/card-context";
import { useParams } from "../providers/route-provider/route-context";
import { useNavigation } from "../providers/router-provider/router-context";
import { splitChunks } from "./edit-card";

function CompleteCard() {
  const { navigate } = useNavigation();
  const { params } = useParams();
  const { cardData, onChange } = useCardData();
  const card = cardData[params.cardId];
  const [번호_1, 번호_2] = splitChunks(String(card["번호"]), 4);

  const [별칭, 셋_별칭] = useState(card["별칭"] ?? "");

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
        </div>
        <div className="card-box">
          <div className="big-card">
            <div className="card-top">
              <span className="card-text__big">{별칭}</span>
            </div>
            <div className="card-middle">
              <div className="big-card__chip"></div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom__number">
                <span className="card-text__big">
                  {번호_1} - {번호_2} - oooo - oooo
                </span>
              </div>
              <div className="card-bottom__info">
                <span className="card-text__big">프롱이</span>
                <span className="card-text__big">
                  {card["만료일"]["월"]} / {card["만료일"]["년"]}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="input-container flex-center w-100">
          <input
            className="input-underline w-75"
            type="text"
            placeholder="카드의 별칭을 입력해주세요."
            onChange={(e) => {
              if (e.target.value.length > 10) {
                return;
              }

              셋_별칭(e.target.value);
            }}
            value={별칭}
          />
        </div>
        <button
          onClick={() => {
            onChange(params.cardId, { ...card, 별칭 });

            navigate("/");
          }}
          className="button-box mt-50">
          <span className="button-text">다음</span>
        </button>
      </div>
    </div>
  );
}

export default CompleteCard;
