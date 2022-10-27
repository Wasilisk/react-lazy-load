import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiPopover: {
            defaultProps: {
                disableRestoreFocus: true
            },
            styleOverrides: {
                root: {
                    pointerEvents: "none"
                },
                paper: {
                    pointerEvents: "auto"
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: { noWrap: true },
                subheaderTypographyProps: { noWrap: true }
            },
            styleOverrides: {
                root: {
                    display: "flex",
                    overflow: "hidden",
                    "& .MuiCardHeader-content": {
                        overflow: "hidden"
                    }
                }
            }
        }
    }
});
