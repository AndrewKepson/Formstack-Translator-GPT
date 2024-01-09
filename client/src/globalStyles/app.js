import { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
/* Theme Colors */
:root {
  --formstack-green: rgb(28, 181, 115);
  --formstack-dark-grey: rgb(23, 38, 46);
  --formstack-black: rgb(21, 35, 43);
  --formstack-slate-500: rgb(125, 140, 148);
  --formstack-slate-400: rgb(178, 194, 199);
  --formstack-slate-300: rgb(214, 222, 224);
  --formstack-slate-200: rgb(237, 242, 245);
  --formstack-slate-100: rgb(245, 247, 250);
  --formstack-skyline: rgb(102, 156, 209);
  --formstack-tangerine: rgb(229, 158, 110);
  --formstack-plumb: rgb(163, 107, 158);
  --formstack-tuscan-sun: rgb(250, 242, 196);
  --formstack-poppy-red: rgb(229, 186, 189);
  --formstack-twilight: rgb(87, 102, 150);
  --formstack-shadow: 0 10px 30px 0 rgb(0 0 0 / 20%);
  --formstack-hover-shadow: 0 0 30px 0 rgb(0 0 0 / 20%);
  --border-radius: 0.125rem;
}

.App {
  text-align: center;
}

button {
  font-size: calc(10px + 2vmin);
}

body {
  height: 100%;
}
`;
