/*
    splice 함수를 구현하세요.
    🚨 splice 메소드를 사용하시면 안됩니다!!
    
    mySplice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
    
    mySplice 함수는 다음과 같은 매개변수를 받습니다.
    mySplice(array, start, deleteCount, ...items)
    매개변수 array와 start는 필수이며 나머지는 옵션입니다. 
    
    => start 인덱스부터 deleteCount 만큼 제거하고, items에 있는 요소들 item1, item2 , ... 를 추가합니다. 

    array : 변경하고 싶은 배열
    start : 배열의 변경을 시작할 인덱스. 
        1. 배열의 길이보다 큰 값이라면 배열의 길이로 시작 인덱스를 설정합니다. 
        2. 음수인 경우 배열의 끝에서부터 요소를 세어나갑니다.
        (즉 -n이면 요소 끝의 n번째 요소를 가리키며 array.length - n번째 인덱스와 같음). 
        값의 절대값이 배열의 길이 보다 큰 경우 0으로 설정합니다.
    deleteCount : 배열에서 제거할 요소의 수.
        1. 생략할 경우 start 인덱스부터 모든 요소를 제거합니다. 
        2. array.length - start보다 크면 start부터의 모든 요소를 제거합니다.
        3. 0 이하라면 어떤 요소도 제거하지 않습니다.
    ...items : 배열에 추가할 요소들이 들어있는 Rest Parameter. 
            3번째부터 들어오는 모든 인자를 받습니다.
            생략할 경우 splice()는 추가하지 않고, 제거만 합니다. 


    리턴으로 객체를 반환합니다. 
    제거한 요소를 담은 배열을 키 removed에 담고, 변경된 결과 배열을 키 array에 담아 반환합니다. 
    아무것도 제거하지 않았으면 removed에 빈 배열을 반환합니다.


    입출력 예시 ) 
    input                                                                            output
    -----------------------------------------------------------------------    ---------------------------------
    array                                        start  deleteCount  ...items
    ------------------------------------------------------------------------------------------------------------
    ['angel', 'clown', 'mandarin', 'sturgeon']    2          0        'drum'     {removed : [], 
                                                                                  array : [
                                                                                            'angel',
                                                                                            'clown',
                                                                                            'drum',
                                                                                            'mandarin',
                                                                                            'sturgeon'
                                                                                          ]
                                                                                 }
    
    
    단, Array.splice() 함수를 직접 사용하지 마세요. 매개변수 부분을 수정하지 마세요.

    참고 ) https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/

function mySplice(array, start, deleteCount, ...items) {
  const removed = [];
  let myArray = array;

  let myStart = start;
  if (myStart > array.length) myStart = array.length;
  if (myStart < 0) myStart = array.length + start;
  if (Math.abs(myStart) > array.length) myStart = 0;

  const myDelete = () => {
    if (deleteCount < 0) return;
    if (deleteCount === undefined) {
      array.forEach((el, i) => {
        if (i >= myStart) removed.push(el);
        myArray = array.filter((_, i) => i < myStart || i >= myStart);
        return;
      });
    }
    array.forEach((el, i) => {
      if (i >= myStart && i < myStart + deleteCount) removed.push(el);
      myArray = array.filter(
        (_, i) => i < myStart || i >= myStart + deleteCount
      );
    });
  };
  myDelete();

  const addItems = () => {
    const startEls = [];
    const endEls = [];
    myArray.forEach((el, i) => {
      if (i < myStart) startEls.push(el);
      if (i >= myStart) endEls.push(el);
    });
    myArray = [...startEls, ...items, ...endEls];
  };
  if (items) addItems();

  return { removed, array: myArray };
}

module.exports = mySplice;
