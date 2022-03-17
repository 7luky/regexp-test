// 정규표현식(RegExp) : https://heropy.blog/2018/10/28/regexp/

// 정규표현식이란 문자열을 검색하고 대체하는 데 사용 가능한 일종의 형식 언어(패턴)이다.

const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbbcccdddd
`;

// const regexp = new RegExp("the", "");
// console.log(str.match(regexp));
// str이라는 input 부분에 입력된 문장에서 the라는 단어를 찾아서 배열데이터를 만들어주는데, 기본적으로 제일 먼저 찾아진 the라는 단어가 배열로 만들어진다.

// 그렇기 떄문에 이 문장에서 the 라는 모든 문자를 찾아서 배열데이터로 만들고 싶으면

// 정규표현식을 생성하는 생성자 함수의 2번째 인자에 g라는 옵션을 추가해주면 된다. 이 옵션을 따로 flag 옵션이라고도 불린다.
// const regExp = new RegExp("the", "gi"); // 생성자 방식
const regExp = /the/gi; // 리터럴 방식
console.log(str.match(regExp));
