import dynamic from 'next/dynamic'
import { useEffect, RefObject, ReactNode, useState } from 'react'

export type SubmitFn = (closeFn: Function) => Promise<any> | void
export type Props = {
  title?: string | null
  description?: string | null
  initialFocusRef?: RefObject<any>
  onClose: () => void
  onLoadingFinish?: () => void
  children?: ReactNode
  onSubmit?: SubmitFn
  stackFooterButtons?: boolean
  footer?: ReactNode
  isOpen: boolean
  closeFn: Function
}
export default function Dialog({
  isOpen,
  closeFn,
  children,
  footer,
  stackFooterButtons = false,
  onClose,
  initialFocusRef,
  title,
  description,
  onSubmit,
  onLoadingFinish
}: Props) {
  const [Modal, setModal] = useState(null)
  useEffect(() => {
    if (Modal) return
    async function loadComponent() {
      if (!isOpen) return
      const Component = await dynamic(() => import('./Modal'))
      setModal(Component)
    }
    loadComponent()
  }, [isOpen, Modal, onLoadingFinish])

  if (!Modal) return null

  return (
    <Modal
      onSubmit={onSubmit}
      onLoadingFinish={onLoadingFinish}
      title={title}
      description={description}
      initialFocusRef={initialFocusRef}
      isOpen={isOpen}
      closeFn={closeFn}
      onClose={onClose}
      footer={footer}
      stackFooterButtons={stackFooterButtons}
    >
      {children}
    </Modal>
  )
}
