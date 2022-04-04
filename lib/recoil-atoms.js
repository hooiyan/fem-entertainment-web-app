import { atom } from 'recoil'

export const loadingAtom = atom({
  key: 'loadingAtom',
  default: false,
})

export const queryAtom = atom({
  key: 'queryAtom',
  default: '',
})

export const pageAtom = atom({
  key: 'pageAtom',
  default: 2,
})

export const totalResultAtom = atom({
  key: 'totalResultAtom',
  default: [],
})

export const currentResultAtom = atom({
  key: 'currentResultAtom',
  default: [],
})

export const visibleAtom = atom({
  key: 'visibleAtom',
  default: false,
})
