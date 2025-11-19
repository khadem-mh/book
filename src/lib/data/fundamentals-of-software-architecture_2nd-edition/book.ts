import { preface } from "./preface"
import { meta } from "./meta"
import { chapters } from "./chapters"

export const book = {
    ...meta
} 
export const bookDetail = {
    ...meta,
    preface,
    chapters
} 