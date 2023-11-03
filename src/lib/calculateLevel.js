export default function calculateLevel(celsius) {
  let hot = 30;
  let warm = 25;
  let normal = 20;
  let chilly = 15;

  if (celsius >= hot) {
    return 1;
  } else if (celsius >= warm) {
    return 2;
  } else if (celsius >= normal) {
    return 3;
  } else if (celsius >= chilly) {
    return 4;
  } else {
    return 5;
  }
}
