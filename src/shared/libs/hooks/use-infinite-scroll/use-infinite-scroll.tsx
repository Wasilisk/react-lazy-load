import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { InfiniteScrollCallback, InfiniteScrollOptions } from "./types";

export const useInfiniteScroll = (queryKey: string, queryCallback: InfiniteScrollCallback, options: InfiniteScrollOptions) => {
    const {
        data,
        fetchNextPage,
        isFetchingNextPage
    } = useInfiniteQuery([queryKey],
        ({ pageParam = 1 }) => queryCallback(pageParam),
        {
            getNextPageParam: (lastPage, allPages) => {
                const maxPages = Math.ceil(parseInt(lastPage.totalCount) / options.itemPerPage);
                const nextPage = allPages.length + 1;
                return nextPage <= maxPages ? nextPage : undefined;
            }
        })

    useEffect(() => {
        let fetching = false;
        const onScroll = async (event: Event) => {
            const { scrollHeight, scrollTop, clientHeight } = (event.target as Document).scrollingElement as Element

            if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
                fetching = true;
                await fetchNextPage();
                fetching = false;
            }
        };

        document.addEventListener("scroll", onScroll);
        return () => {
            document.removeEventListener("scroll", onScroll);
        }
    }, [])

    return {
        data,
        isFetchingNextPage
    }
}