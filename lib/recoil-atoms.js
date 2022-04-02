import { atom } from 'recoil'

export const loadingAtom = atom({
  key: 'loadingAtom',
  default: true,
})

export const queryAtom = atom({
  key: 'queryAtom',
  default: '',
})
