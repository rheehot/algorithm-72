/*

    쿠키 레벨업하기

    쿠키런 킹덤을 좋아하는 세준님은 모든 쿠키들의 레벨을 N 이상으로 만들려고 합니다.
    모든 쿠키들의 레벨을 N 이상으로 만들기 위해 세준님은 레벨이 가장 낮은 두 개의 쿠키를 조합하여 새로운 쿠키를 만듭니다.
    두 개의 쿠키를 조합하여 새로운 레벨의 쿠키를 만드는 방법은 다음과 같습니다.

    새로운 쿠키의 레벨 = (가장 낮은 쿠키의 레벨 * 2) + 두 번째로 낮은 레벨의 쿠키

    세준님은 모든 쿠키의 레벨이 N 이상이 될 때까지 반복하여 쿠키를 조합합니다.
    세준님이 가진 쿠키의 레벨이 담긴 배열 cookies와 원하는 레벨 N이 주어질 때, 
    모든 쿠키의 레벨을 N 이상으로 만들기 위해 조합해야 하는 최소 횟수를 반환하세요.

    coockies의 길이는 2 이상 100 이하입니다.
    N은 0 이상 1,000 이하입니다.
    cookies의 원소는 각각 0 이상 100 이하입니다.
    모든 쿠키의 레벨을 N 이상으로 만들 수 없는 경우에는 -1을 반환합니다.

    input                        output
    -----------------------------------------
    cookies            N    
    -----------------------------------------
    [2, 4, 6, 8, 10]   8          2         
    

*/

function levelUp(cookies, N) {
  // 여기에서 작업해 주세요
  const newCookies = cookies;
  let count = 0;

  const recursive = () => {
    newCookies.sort((a, b) => a - b);
    if (newCookies[0] >= N) return;
    if (newCookies.length < 2) return;

    count++;
    const newCookie = newCookies[0] * 2 + newCookies[1];
    newCookies.splice(0, 2);
    newCookies.push(newCookie);
    recursive();
  };
  recursive();

  return newCookies[0] >= N ? count : -1;
}

module.exports = levelUp;
