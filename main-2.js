const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbbcccdddd
`;

const regexp = /the/gi;
console.log(str.match(regexp));

// 정규표현식에서 .(마침표) 표현은 특정한 문자를 검색하는 일종의 패턴이다.
// 그런데 이 문장에서 마침표를 찾고 싶다라고 .(마침표)을 찍었는데 이것은 쉽게 말하자면 하나의 명령으로 동작이 된다.
// 그래서 우리는 그것이 명령으로 동작하지 않고 일반적인 문자로 해석 되라고 특정한 기호에 앞에다가 백슬래시(\) 기호를 붙여줄 수가 있다.

// 이스케이프 문자(Escape Character)란 \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말한다.

// 특정한 기호를 동작하는 것을 탈출해서 문자로 해석 되라고 앞에다가 백슬래시 기호를 붙인 거라고 보면 된다.
// 일반적인 문자로 해석

console.log(str.match(/\./gi));

// $ (달러) 기호의 앞에 있는 하나의 단어로 해당하는 줄이
// 끝나는 부분을 찾아서 끝나는 부분을 일치시킨다는 뜻이다.
console.log(str.match(/\.$/gi));
console.log(str.match(/\.$/gim));

// 전체 영역 : g 플래그
// 각각의 줄 시작과 끝을 모두 해석하겠다. : m 플래그
