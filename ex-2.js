function atLeastFive(array, operation) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      count++;
    }
    if (count >= 5) {
      return true;
    }
  }
  return false;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function isGreaterThan70(score) {
  return score > 70;
}

let scoreRoom1Result = atLeastFive(studentScoresRoom1, isGreaterThan70)
  ? "ผ่านเกณฑ์ ✅"
  : "ไม่ผ่านเกณฑ์ ❌";
let scoreRoom2Result = atLeastFive(studentScoresRoom2, isGreaterThan70)
  ? "ผ่านเกณฑ์ ✅"
  : "ไม่ผ่านเกณฑ์ ❌";
let scoreRoom3Result = atLeastFive(studentScoresRoom3, isGreaterThan70)
  ? "ผ่านเกณฑ์ ✅"
  : "ไม่ผ่านเกณฑ์ ❌";

console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result}`);
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result}`);
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result}`);
