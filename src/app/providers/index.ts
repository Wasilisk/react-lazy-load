import compose from "compose-function";

import { withQueryProvider } from "./with-query-provider";
import { withTheme } from "./with-theme";

export const withProviders = compose(withQueryProvider, withTheme);