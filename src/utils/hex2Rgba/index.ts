/// <reference path="../../../StartUi.d.ts" />

export default function hex2Rgba(hex: string, alpha: number): StartUi.IRgba {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: alpha,
  } : { r: 0, g: 0, b: 0, a: alpha };
}
