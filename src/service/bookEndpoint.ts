const host: string = "54.179.10.49"
const protocol: string = "http"
const port: string = "8081"

export interface BookEndpoint {
    url: string
    method: string
    body?: any
}

const baseUrl = `${protocol}://${host}:${port}/book`

export const GET_ALL_BOOK: BookEndpoint = {
    url: `${baseUrl}/find/all`,
    method: 'GET'
}

export function ADD_BOOK<T>(body: T): BookEndpoint {
    return {
        url: `${baseUrl}/add`,
        method: 'POST',
        body: body as T
    } as BookEndpoint
}

export const GET_BOOK_BY_ID = (id: string): BookEndpoint => {
    return {
        url: `${baseUrl}/find/${id}`,
        method: 'GET'
    }
}


