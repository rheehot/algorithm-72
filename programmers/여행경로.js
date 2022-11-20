function solution(tickets) {
  // 총 여행지 수
  const total = tickets.length + 1;

  let result = [];

  /**
   * @param {route} 기존 경로와 비교할 새로운 경로
   * @returns 새로운 경로가 기존 경로보다 정렬 상 앞섰는지 여부
   */
  const sortRoute = (route) => {
    // 담겨있는 경로가 하나도 없으면 비교할 대상이 없으므로 true 리턴
    if (result.length === 0) return true;

    // 새로운 경로가 기존 경로보다 정렬 상 앞서 있으면 true 리턴
    if (route.join(" ").localeCompare(result.join(" ")) < 0) return true;
    else return false;
  };

  /**
   * @param {route} 현재 경로
   * @param {remainTickets} 남은 티켓들
   * @returns 갈 수 있는 다음 경로를 찾는 함수
   */
  // 현재 경로, 남은 티켓들
  const getRoute = (route, remainTickets) => {
    // 여행지를 다 방문했으면
    if (route.length === total) {
      // 정렬 기준에 적합하면 result에 대입
      if (sortRoute(route)) {
        result = route;
      }
      return;
    }

    // 다음 여행지 후보들 구하기
    remainTickets.forEach((el, i) => {
      // 경로의 마지막과 티켓의 출발지가 같으면
      if (el[0] === route[route.length - 1]) {
        // 남은 티켓에서 현재 사용할 티켓 제거
        const newRemainTickets = [...remainTickets];
        newRemainTickets.splice(i, 1);
        // 티켓의 도착지를 경로에 추가
        getRoute([...route, el[1]], newRemainTickets);
      }
    });
  };

  getRoute(["ICN"], tickets);
  return result;
}

solution([
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
]);
// ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
