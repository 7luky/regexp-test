const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`;

// 2글자 이상 3글자 미만 모든 글자 추출
// console.log(str.match(/\b\w{2,3}\b/g));
console.log(str.match(/[fox]/g));
console.log(str.match(/[0-9]{1,}/g));
console.log(str.match(/[가-힣]{1,}/g));
console.log(str.match(/\bf\w{1,}/g));
console.log(str.match(/\d/g));
console.log(str.match(/\d{1,}/g));

const h = `  the hello  world   !

`;

console.log(h.match(/\s/g));
console.log(h.replace(/\s/g, ""));
console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));
