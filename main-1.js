let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbbcccdddd
`;

const regexp = /fox/gi;
// console.log(regexp.test(str));
console.log(str.replace(regexp, "AAA"));
console.log(str); // 원본 데이터 수정 X

str = str.replace(regexp, "AAA");
console.log(str);
