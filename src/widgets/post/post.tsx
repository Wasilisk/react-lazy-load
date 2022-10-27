import { Suspense, useRef, useState } from "react";

import { PostCard } from "entities/post";

import { AddToFavourites, SharePost, ShowMoreActions } from "features/post";

import { lazyImport } from "shared/libs/lazy-import";

import { PostProps } from "./types";
import { Loader, Popover } from "shared/ui";

const { FetchPostPopoverData } = lazyImport(() => import("features/post/fetch-popover-data"), "FetchPostPopoverData");


export const Post = ({ id, ...props }: PostProps) => {
    const [openedPopover, setOpenedPopover] = useState(false);
    const popoverAnchor = useRef(null);

    const handlePopoverOpen = () => {
        setOpenedPopover(true);
    };
    const handlePopoverClose = () => {
        setOpenedPopover(false);
    };

    return (
        <>
            <PostCard
                key={id}
                {...props}
                ref={popoverAnchor}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                actions={
                    <>
                        <AddToFavourites />
                        <SharePost />
                    </>
                }
                extraActions={
                    <ShowMoreActions />
                }
            />
            <Popover
                id="opover"
                open={openedPopover}
                anchorEl={popoverAnchor.current}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
                PaperProps={{ onMouseLeave: handlePopoverClose, onMouseEnter: handlePopoverOpen }}
            >
                <Suspense fallback={<Loader />}>
                    <FetchPostPopoverData userId={props.profileInfo.id} />
                </Suspense>
            </Popover>
        </>
    )
}