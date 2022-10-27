import { Box } from "../box";
import { CircularProgress } from "../circular-progress";

export const Loader = () => (
    <Box m={3} display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
    </Box>
)