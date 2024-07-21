import { useParams } from "../providers/route-provider/route-context";
import { useNavigation } from "../providers/router-provider/router-context";

function EditCard() {
  const { navigate } = useNavigation();
  const { params } = useParams();

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
                <span className="card-text">NAME</span>
                <span className="card-text">MM / YY</span>
              </div>
            </div>
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">카드 번호</span>
          <div className="input-box">
            <input className="input-basic" type="text" />
            <input className="input-basic" type="text" />
            <input className="input-basic" type="password" />
            <input className="input-basic" type="password" />
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">만료일</span>
          <div className="input-box w-50">
            <input className="input-basic" type="text" placeholder="MM" />
            <input className="input-basic" type="text" placeholder="YY" />
          </div>
        </div>
        <div className="input-container">
          <span className="input-title">카드 소유자 이름(선택)</span>
          <input
            type="text"
            className="input-basic"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          />
        </div>
        <div className="input-container">
          <span className="input-title">보안코드(CVC/CVV)</span>
          <input className="input-basic w-25" type="password" />
        </div>
        <div className="input-container">
          <span className="input-title">카드 비밀번호</span>
          <input className="input-basic w-15" type="password" />
          <input className="input-basic w-15" type="password" />
          <input className="input-basic w-15" type="password" />
          <input className="input-basic w-15" type="password" />
        </div>
        <button
          className="button-box"
          onClick={() => navigate(`/edit-card/${params.cardId}/complete-card`)}>
          <span className="button-text">다음</span>
        </button>
      </div>
    </div>
  );
}

export default EditCard;
