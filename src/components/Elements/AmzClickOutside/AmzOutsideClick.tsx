import React, { MutableRefObject, useEffect, useRef } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useOutsideEffect = (ref: MutableRefObject<any>, callback: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}
export type OutsideComponent = {
  onClickOutside: () => void
  children: React.ReactNode
}
/**
 * Component wrapper if you click outside of it
 */
export const AmzOutsideClick = ({ onClickOutside, children }: OutsideComponent) => {
  const wrapperRef = useRef(null)
  useOutsideEffect(wrapperRef, onClickOutside)

  return <div ref={wrapperRef}>{children}</div>
}
