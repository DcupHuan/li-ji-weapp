import { request } from '../request'

export function apiGiftBookPageGet(data: Api.PaginationQuery) {
  return request<Api.PaginationResult<Api.GiftBook>>({
    url: 'gift-book/page',
    data,
  })
}

export function apiGiftBookGet(data: any) {
  return request<Api.GiftBook>({
    url: 'gift-book',
    data,
  })
}

export function apiGiftBookPut(data: any) {
  return request<boolean>({
    url: 'gift-book',
    method: 'PUT',
    data,
  })
}

export function apiGiftBookPost(data: any) {
  return request<string>({
    url: 'gift-book',
    method: 'POST',
    data,
  })
}

export function apiGiftBookDelete(data: any) {
  return request<boolean>({
    url: 'gift-book',
    method: 'DELETE',
    data,
  })
}
