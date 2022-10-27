import { Post } from "widgets/post"

import { PostsApi, PostType } from "entities/post"

import { useInfiniteScroll } from "shared/libs/hooks"

import { Container, Loader, Stack } from "shared/ui"


export const Home = () => {
    const { data, isFetchingNextPage } = useInfiniteScroll("posts", PostsApi.fetchPosts, {
        itemPerPage: 5
    })

    return (
        <Container maxWidth="lg">
            <Stack alignItems="center" spacing={2}>
                {
                    data?.pages.map(page =>
                        page.posts.map((post: PostType) => <Post key={post.id} {...post} />)
                    )
                }
            </Stack>
            {isFetchingNextPage && <Loader />}
        </Container>
    )
}