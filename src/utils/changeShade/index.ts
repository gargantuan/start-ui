export default function changeShade(col: string, amt: number): string {
  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;
  var b = ((num >> 8) & 0x00FF) + amt;
  var g = (num & 0x0000FF) + amt;
  var newColor = g | (b << 8) | (r << 16);
  return newColor.toString(16);
}
