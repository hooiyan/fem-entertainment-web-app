import { useRecoilState } from 'recoil'
import { visibleAtom } from '../lib/recoil-atoms'

export default function ScrollToTop() {
  const [visible, setVisible] = useRecoilState(visibleAtom)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <button onClick={scrollToTop} className={visible ? 'inline' : 'none'}>
      ScrollToTop
    </button>
  )
}
