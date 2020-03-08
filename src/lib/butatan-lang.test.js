import { convertToButatanLang } from "./butatan-lang";

describe("butatan-lang", () => {
  test("convertToButatanLang()", () => {
    const convert = convertToButatanLang;

    expect(convert("こんにちは、ぴんくのぶたです")).toBe(
      "こんねては、ぴんくのぶたでとぅ"
    );
    expect(convert("こんにちは、ピーエヌディーです")).toBe(
      "こんねては、ペーエヌデーでとぅ"
    );
    expect(convert("こんにちは、にんぎょうおばあちゃんです")).toBe(
      "こんねては、ねんげょうおばあたんでとぅ"
    );
    expect(convert("こんにちは、バズライト・イヤーです")).toBe(
      "こんねては、バドゥラエト・エヤーでとぅ"
    );
  });
});
