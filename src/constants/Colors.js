const primary = "#63ad45";
const greens = {
  green100: "#2bdc4d",
  green400: "#45c772",
};
const blues = {
  blue200: "#2b99dc",
  blue400: "#4599ad",
};
const browns = {
  brown100: "#c04b31",
  brown200: "#bf4b31",
};
const grays = {
  white: "#fff",
  gray100: "#f8f8f8",
  gray200: "#f9f9f9",
  gray500: "#77838f",
  gray800: "#393d3c",
  gray900: "#333333",
  black: "#000",
};

const others = {
  red: "#c74545",
  orange: "#e38526",
  purple: "#f372da",
  logout: "#c24444",
};

export default {
  light: {
    primary,
    text: grays.gray900,
    subText: grays.gray500,
    background: grays.gray200,
    ModalBg: grays.gray100,
    bageBg: "#d8d8d8",
    tint: primary,
    tabIconDefault: "#afb2b5",
    ...greens,
    ...blues,
    ...grays,
    ...browns,
    ...others,
  },
  dark: {
    // primary,
    // text: grays.white,
    // background: grays.gray900,
    // tint: primary,
    // tabIconDefault: "#ccc",
    // ...purples,
    // ...grays,
    // white: grays.gray900,
  },
};
