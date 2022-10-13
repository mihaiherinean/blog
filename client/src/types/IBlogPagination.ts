import { IBlog } from "./IBlog"

export interface IBlogPagination {
  cursor: unknown
  items: IBlog[]
  next_page: unknown
}