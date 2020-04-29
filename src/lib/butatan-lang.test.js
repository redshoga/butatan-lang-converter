import { convertToButatanLang } from "./butatan-lang";

describe("butatan-lang", () => {
  test("convertToButatanLang()", () => {
    const convert = convertToButatanLang;

    // 入門
    // https://www.youtube.com/watch?v=R0lkT2iUR2s
    expect(convert("こんにちは")).toBe("こんねてぃは");
    expect(convert("ぴんくのぶたです")).toBe("ぺんくのぶたでとぅ");
    expect(convert("ピーエヌディーです")).toBe("ペーエヌディーでとぅ");
    expect(convert("にんぎょうおばあちゃんです")).toBe(
      "ねんごうおばあたんでとぅ"
    );
    expect(convert("バズライト・イヤーです")).toBe(
      "バドゥアエト・エアーでとぅ"
    );
    expect(convert("はしもとかんなちゃん")).toBe("はてぃもとかんなたん");

    // 上級
    // https://www.youtube.com/watch?v=A5mpnfdmO7A
    expect(convert("やめてください")).toBe("あめてくだたえ");
    expect(convert("ちょうしにのるな")).toBe("とうてぃねのうな");
    expect(convert("きゃりーぱみゅぱみゅ")).toBe("かえーぱむぱむ");
    expect(convert("ひろゆき")).toBe("へおうけ");
  });
});
