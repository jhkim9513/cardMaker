import { firebaseDatabase } from "./firebase";

class CardRepository {
  syncCards(userId, onUpdate) {
    // firebase에서 해당 경로상의 모든 변화를 감지하는데
    const ref = firebaseDatabase.ref(`${userId}/cards`);
    // 변화(update)가 있을 때 마다 snapshot을 인자로 가지는 callback함수를 호출하는데
    ref.on("value", (snapshot) => {
      // snapshot의 value가 있다면 callback함수인 onUpdate를 호출해줌
      const value = snapshot.val();
      value && onUpdate(value);
      // 여기서 value는 maker.jsx에서의 cards 가 된다.
    });
    // 여기서 return하는 ref.off(); 는 더이상의 업데이트를 보지않고 끝내는 함수인데
    // 이것을 maker.jsx에서 stopSync변수에 넣어주어 useEffect return값에 사용한다.
    return () => ref.off();
  }

  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
