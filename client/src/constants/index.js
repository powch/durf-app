// Auth constants
export const authDomain = "dev-kg1qdows.us.auth0.com";
export const authClientId = "sLq79b3S8qG1AkcVO2GXza1KgTkWqPfr";

// Page states
export const PAGE_LOGIN = "loginPage";
export const PAGE_CHARACTER_LIST = "characterListPage";
export const PAGE_CREATE_CHARACTER = "createCharacterPage";

// Page loading states
export const PAGE_CHARACTER_LIST_LOADING = "characterListPage.loading";

// Other
export const newCharacterTemplate = () => ({
  name: "",
  core_stats: {
    STR: 2,
    DEX: 2,
    WIL: 2,
  },
  armor: {
    current: 0,
    max: 0,
  },
  damage: {
    hit_dice: 1,
    wounds: 0,
  },
  xp_value: 0,
  inventory: {
    stress: 0,
    slots: 10,
    gold_value: 0,
    equipment: [],
  },
  spells: [],
  hirelings: [],
});
