export type PostType = {
    id: number,
    profileInfo: {
        id: number,
        userAvatar: string,
        username: string,
        headline: string
    },
    media: {
        mediaSrc: string, 
        alt: string
    },
    textContent: string
}