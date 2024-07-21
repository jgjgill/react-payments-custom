import { useNavigation } from "../providers/router-provider/router-context";

const cardBoxList = [1, 2];

function CardList() {
  const { navigate } = useNavigation();

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>
        {cardBoxList.map((cardBoxItem) => (
          <button
            key={cardBoxItem}
            className="card-box"
            onClick={() => navigate(`/edit-card/${cardBoxItem}`)}>
            <div className="small-card">
              <div className="card-top">
                <span className="card-text">클린카드</span>
              </div>
              <div className="card-middle">
                <div className="small-card__chip"></div>
              </div>
              <div className="card-bottom">
                <div className="card-bottom__number">
                  <span className="card-text">1111 - 2222 - oooo - oooo</span>
                </div>
                <div className="card-bottom__info">
                  <span className="card-text">프롱이</span>
                  <span className="card-text">12 / 23</span>
                </div>
              </div>
            </div>
          </button>
        ))}

        <span className="card-nickname">법인카드</span>
        <button
          className="card-box"
          onClick={() => navigate(`/edit-card/${cardBoxList.length + 1}`)}>
          <div className="empty-card">+</div>
        </button>
      </div>
    </div>
  );
}

export default CardList;
