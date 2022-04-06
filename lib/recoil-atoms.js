import { atom } from 'recoil'

export const loadingAtom = atom({
  key: 'loadingAtom',
  default: false,
})

export const queryAtom = atom({
  key: 'queryAtom',
  default: '',
})

export const currentPageAtom = atom({
  key: 'currentPageAtom',
  default: 1,
})

export const visibleAtom = atom({
  key: 'visibleAtom',
  default: false,
})
