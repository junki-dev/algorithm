function solution(friends, gifts) {
  const friendsMap = new Map();

  // 초기 친구 맵 설정
  friends.forEach((friend) => {
    let subMap = new Map();
    friends.forEach((friend2) => subMap.set(friend2, 0));
    subMap.set("final", 0);
    friendsMap.set(friend, subMap);
  });

  // 선물 기록을 바탕으로 선물 횟수 업데이트
  gifts.forEach((gift) => {
    const [sender, receiver] = gift.split(" ");
    friendsMap
      .get(sender)
      .set(receiver, friendsMap.get(sender).get(receiver) + 1);
  });

  friends.forEach((friend) => {
    const myMap = friendsMap.get(friend);
    let sendSum = Array.from(myMap.values()).reduce((acc, cur) => acc + cur, 0);
    let receiveSum = 0;
    friendsMap.forEach((friendValue, friendKey) => {
      if (friendValue.has(friend)) {
        receiveSum += friendValue.get(friend);
      }
    });

    myMap.set(friend, sendSum - receiveSum);

    myMap.forEach((_, partner) => {
      if (!friends.includes(partner)) {
        return;
      }

      if (myMap.get(partner) > friendsMap.get(partner).get(friend)) {
        myMap.set("final", myMap.get("final") + 1);
      }

      if (
        (myMap.get(partner) === 0 &&
          friendsMap.get(partner).get(friend) === 0) ||
        myMap.get(partner) === friendsMap.get(partner).get(friend)
      ) {
        if (myMap.get(friend) > friendsMap.get(partner).get(partner)) {
          myMap.set("final", myMap.get("final") + 1);
        }
      }
    });
  });

  return Math.max(
    ...Array.from(friendsMap.values()).map((value) => value.get("final"))
  );
}

const result = solution(
  ["muzi", "ryan", "frodo", "neo"],
  [
    "muzi frodo",
    "muzi frodo",
    "ryan muzi",
    "ryan muzi",
    "ryan muzi",
    "frodo muzi",
    "frodo ryan",
    "neo muzi",
  ]
);

console.log(result);
