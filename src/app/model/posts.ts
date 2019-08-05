export interface Post {
    createdAt?: Date,
    image: string,
    post: string,
    updatedAt?: Date,
    user?: {
        _id?: string,
        firstName?: string,
        lastName?: string,
        image?: string
    },
    _v?: number,
    _id?: string
}