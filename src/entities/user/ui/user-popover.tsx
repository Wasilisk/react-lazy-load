import { AddIcon } from "shared/icons";

import { Avatar, Button, Card, CardActions, CardHeader } from "shared/ui";

import { PostPopoverProps } from "./types";

export const UserPopover = ({ userAvatar, username, headline }: PostPopoverProps) => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardHeader
                avatar={
                    <Avatar aria-haspopup="true" src={userAvatar} />
                }
                title={username}
                subheader={headline}
            />
            <CardActions>
                <Button variant="contained" fullWidth>
                    <AddIcon />
                    Follow
                </Button>
            </CardActions>
        </Card>
    )
}