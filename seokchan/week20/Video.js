function solution(video_len, pos, op_start, op_end, commands) {
  let answer = "";

  //초로 변경
  const seconds = (time) => {
    const [m, s] = time.split(":").map(Number);
    return m * 60 + s;
  };

  const end = seconds(video_len);
  const opStart = seconds(op_start);
  const opEnd = seconds(op_end);
  let now = seconds(pos);

  for (const cmd of commands) {
    if (now >= opStart && now <= opEnd) {
      now = opEnd;
    }
    if (cmd === "prev") {
      now = Math.max(0, now - 10); // 0 밑으로 안떨어지게
    } else if (cmd === "next") {
      now = Math.min(end, now + 10);
    }
    if (now >= opStart && now <= opEnd) {
      now = opEnd;
    }
  }

  //시간으로 변경
  const time = (seconds) => {
    const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
    const ss = String(seconds % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  };

  return (answer = time(now));
}

console.log(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"])); // 13:00
