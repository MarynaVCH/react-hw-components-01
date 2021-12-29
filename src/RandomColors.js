export default function randomColor() {
  return `#${Math.floor(Math.random() * 16777216).toString(16)}`;
}
