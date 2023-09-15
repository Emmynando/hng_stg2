export function sliceRevenue(figure: number) {
  if (figure > 9_999 && figure < 999_999) {
    const kFigure = figure / 1000;
    return `${Math.floor(kFigure)}k`;
  } else {
    const kFigure = figure / 1_000_000;
    return `${Math.floor(kFigure)}M`;
  }
}
