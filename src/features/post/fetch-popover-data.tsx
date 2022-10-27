import { useQuery } from "@tanstack/react-query";

import { UserApi, UserPopover } from "entities/user";

export type FetchPostPopoverProps = {
    userId: number
}

export const FetchPostPopoverData = ({ userId }: FetchPostPopoverProps) => {
    const { data } = useQuery(["users", userId], () => UserApi.getUserById(userId))

    return <UserPopover {...data![0]} />
}