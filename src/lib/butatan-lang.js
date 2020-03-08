// https://qiita.com/mimoe/items/855c112625d39b066c9a
const hiraToKana = str =>
  str.replace(/[\u3041-\u3096]/g, function(match) {
    var chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });

const replace = (target, a, b) => {
  let retStr = target;
  retStr = retStr.replace(new RegExp(a, "gm"), b, "gm");
  retStr = retStr.replace(new RegExp(hiraToKana(a), "gm"), hiraToKana(b), "gm");
  return retStr;
};

export const convertToButatanLang = japanese => {
  const convertTableList = [
    // ちゃ行変換
    [
      ["ちゃ", "た"],
      ["ちゅ", "つ"],
      ["ちょ", "と"]
    ],
    // 母音のiをeに
    [
      ["い", "え"],
      ["き", "け"],
      ["し", "せ"],
      ["ち", "て"],
      ["に", "ね"],
      ["ひ", "へ"],
      ["み", "め"],
      ["り", "れ"],
      // 濁音, 半濁音
      ["ぎ", "げ"],
      ["じ", "ぜ"],
      ["ぢ", "で"],
      ["び", "べ"],
      ["ぴ", "ぺ"]
    ],
    // さ行変換
    [
      ["さ", "た"],
      ["し", "ち"],
      ["す", "つ"],
      ["せ", "て"],
      ["と", "と"],
      ["ざ", "だ"],
      ["じ", "ぢ"],
      ["ず", "づ"],
      ["ぜ", "で"],
      ["ぞ", "ど"]
    ],
    // た行変換
    [
      // ["た", "た"],
      ["ち", "てぃ"],
      ["つ", "とぅ"],
      // ["て", "て"],
      // ["と", "と"],
      // ["だ", "だ"],
      ["ぢ", "でぃ"],
      ["づ", "どぅ"]
      // ["で", "で],
      // ["ど", "ど"],
    ],
    // ぃ対応
    [["ぃ", ""]]
  ];

  let retStr = japanese;
  convertTableList.forEach(convertTable => {
    convertTable.forEach(convertRow => {
      retStr = replace(retStr, convertRow[0], convertRow[1]);
    });
  });

  // 特別対応
  retStr = replace(retStr, "ぺんく", "ぴんく");

  return retStr;
};
