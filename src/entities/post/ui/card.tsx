import { forwardRef } from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from "shared/ui";

import { PostCardProps } from "./types";

export const PostCard = forwardRef<HTMLDivElement, PostCardProps>(({ profileInfo, media, textContent, actions, extraActions, onMouseEnter, onMouseLeave }, ref) => {
    const { userAvatar, username, headline } = profileInfo;
    const { mediaSrc, alt } = media;

    return (
        <Card sx={{ width: 500 }}>
            <CardHeader
                avatar={
                    <div ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Avatar aria-haspopup="true" src={userAvatar} />
                    </div>
                }
                action={extraActions}
                title={username}
                subheader={headline}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {textContent}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                image={mediaSrc}
                alt={alt}
            />
            <CardActions disableSpacing>
                {actions}
            </CardActions>
        </Card>
    )
})