import { atom } from 'recoil'

export const loadingAtom = atom({
  key: 'loadingAtom',
  default: false,
})

export const queryAtom = atom({
  key: 'queryAtom',
  default: '',
})

export const visibleAtom = atom({
  key: 'visibleAtom',
  default: false,
})
