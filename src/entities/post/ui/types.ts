import { ReactNode } from "react";
import { PostType } from "../types";

export type PostCardProps = Omit<PostType, "id"> & {
    actions: ReactNode, 
    extraActions: ReactNode,
    onMouseEnter: (event: React.MouseEvent<HTMLElement>) => void;
    onMouseLeave: (event: React.MouseEvent<HTMLElement>) => void;
}