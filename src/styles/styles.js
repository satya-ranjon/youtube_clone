// A bunch of common styles exported as  objects

/***********************
 * App.js
 * @type {object}
 ************************/
export const appWrapper = {
  display: "flex",
  height: "100vh",
  overflow: "hidden",
};
/***********************
 * Navigation
 * @type {object}
 ************************/

export const searchBar = {
  display: "flex",
  alignItems: "center",
  width: 400,
  boxShadow: 0,
  border: "1px solid #ccc",
  borderRadius: 0,
  mr: 1,
};

/**
 *  @type {object}
 */
export const appBar = {
  backgroundColor: "white",
  color: "#000",
};
/**
 *  @type {object}
 */
export const toolbarWrapper = {
  display: "flex",
  justifyContent: "space-between",
  flexGrow: 1,
};
/**
 *  @type {object}
 */
export const logoText = {
  fontSize: 22,
  ml: 1,
  fontFamily: "Oswald",
};

/***********************
 * SideList
 * @type {object}
 ************************/

export const sideListWrapper = {
  width: "100%",
  bgcolor: "background.paper",
  borderRight: "1px solid #ddd",
};

/***********************
 * Shorts
 * @type {object}
 ************************/

export const shortsWrapper = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  my: 3,
};
/**
 *  @type {object}
 */
export const shortsCard = { maxWidth: 200, boxShadow: "none", mx: 2 };
/**
 *  @type {object}
 */
export const shortsHeader = { ml: 1, fontSize: 20, fontWeight: "bold" };

/***********************
 * Notification List
 *  @type {object}
 ************************/
export const notificationWrapper = {
  width: "100%",
  maxWidth: 460,
  pb: 0,
};

/***********************
 * @type {object}
 * Card.js
 ************************/

export const appCardList = {
  width: "100%",
  bgcolor: "background.paper",
  p: 0,
  m: 0,
  maxWidth: "100%",
};
/***********************
 * @type {object}
 * AppContentArea
 ************************/
export const sideBarContentWrapper = {
  display: "flex",
  mt: 8,
  width: "100vw",
  overflow: "hidden",
};

/************************
 * @type {object}
 * General styles
 ************************/
export const flexAlignCenter = {
  display: "flex",
  alignItems: "center",
};

export const flexColumnGrow = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
};

export const flexColumnCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export const inlineText = { display: "inline", fontSize: 12 };

export const flex = { display: "flex" };

export const scrollWrapper = {
  overflowY: "scroll",
  "::-webkit-scrollbar": { height: "3px" },
};
export const hideOnMobile = { display: { xs: "none", sm: "flex" } };
