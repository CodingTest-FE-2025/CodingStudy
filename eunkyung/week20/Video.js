function solution(video_len, pos, op_start, op_end, commands) {
  let current = Time(pos);
  const videoLength = Time(video_len);
  const opStart = Time(op_start);
  const opEnd = Time(op_end);

  commands.forEach((value) => {
    if (opStart <= current && current <= opEnd) {
      current = opEnd;
    }
    if (value === "prev") {
      current = Math.max(0, current - 10);
    } else if (value === "next") {
      current = Math.min(videoLength, current + 10);
    }
    if (opStart <= current && current <= opEnd) {
      current = opEnd;
    }
  });

  let min = String(Math.floor(current / 60)).padStart(2, "0");
  let second = String(current % 60).padStart(2, "0");
  return `${min}:${second}`;
}

const Time = (time) => {
  const [min, second] = time.split(":").map(Number);
  return min * 60 + second;
};
