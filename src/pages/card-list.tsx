import React from "react";
import { useCardList } from "../providers/card-provider/card-context";
import { useNavigation } from "../providers/router-provider/router-context";
import { generateRandomId } from "../utils/random-id";

function CardList() {
  const { navigate } = useNavigation();
  const cardList = useCardList();

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>
        {cardList.map((card) => {
          const { 만료일, 번호, 별칭, 소유자_이름, 키 } = card;

          return (
            <React.Fragment key={키}>
              <button
                className="card-box"
                onClick={() => navigate(`/edit-card/${키}`)}>
                <div className="small-card">
                  <div className="card-top">
                    <span className="card-text">클린카드</span>
                  </div>

                  <div className="card-middle">
                    <div className="small-card__chip"></div>
                  </div>

                  <div className="card-bottom">
                    <div className="card-bottom__number">
                      <span className="card-text">{번호}</span>
                    </div>
                    <div className="card-bottom__info">
                      <span className="card-text">{소유자_이름}</span>
                      <span className="card-text">
                        {만료일["월"]} / {만료일["년"]}
                      </span>
                    </div>
                  </div>
                </div>
              </button>

              <span className="card-nickname">{별칭}</span>
            </React.Fragment>
          );
        })}

        <button
          className="card-box"
          onClick={() => navigate(`/edit-card/${generateRandomId()}`)}>
          <div className="empty-card">+</div>
        </button>
      </div>
    </div>
  );
}

export default CardList;
