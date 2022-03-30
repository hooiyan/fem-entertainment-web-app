import { atom } from 'recoil'

export const loadingAtom = atom({
  key: 'loadingAtom',
  default: false,
})

export const queryAtom = atom({
  key: 'queryAtom',
  default: '',
})

export const resultAtom = atom({
  key: 'resultAtom',
  default: [],
})

export const movieResultAtom = atom({
  key: 'movieResultAtom',
  default: [],
})

export const tvResultAtom = atom({
  key: 'tvResultAtom',
  default: [],
})
