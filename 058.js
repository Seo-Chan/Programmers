// 점의 위치 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
  // const [x, y] = dot;
  var answer = 0;
  if (dot[0] >= 0 && dot[1] >= 0) answer = 1;
  if (dot[0] < 0 && dot[1] >= 0) answer = 2;
  if (dot[0] < 0 && dot[1] < 0) answer = 3;
  if (dot[0] >= 0 && dot[1] < 0) answer = 4;
  return answer;
}
