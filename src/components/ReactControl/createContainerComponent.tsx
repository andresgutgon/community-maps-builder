import { useState, useEffect, forwardRef, useImperativeHandle, Ref } from 'react'
import { createPortal } from 'react-dom'
import { ElementHook, LeafletProvider } from '@react-leaflet/core'

import { ControlOptionsWithChildren } from './DummyControl'

/*
 * Origin: https://github.com/LiveBy/react-leaflet-control/blob/master/lib/control.jsx
 * This is needed because the control is only attached to the map in
 * MapControl's componentDidMount, so the container is not available
 * until this is called. We need to now force a render so that the
 * portal and children are actually rendered.
 */
const useForceUpdate = () => {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

export function createContainerComponent<
  E, P extends ControlOptionsWithChildren
>(useElement: ElementHook<E, P>) {
  function ContainerComponent(props: P, ref: Ref<E>) {
    const forceUpdate = useForceUpdate()
    const [filtersContainer, setFilters] = useState<HTMLDivElement>(null)
    const { instance, context } = useElement(props, null).current
    const children = props.children
    const contentNode = (instance as any).getContainer()

    useImperativeHandle(ref, () => instance)
    useEffect(() => {
      forceUpdate()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contentNode, filtersContainer])


    //if (!children || !filtersContainer) return null
    if (!children || !contentNode) return null
    contentNode.classList.add('leaflet-control-search')

    // The provider allow access to Leaflet.MapContainer context
    // inside our React components
    // Also we put inside the div created by leaflet our
    // React component with a React portal.
    //
    // This is science fiction baby. How crazy is the code
    // when you mix imperative and declarative
    return (
      createPortal(
        <LeafletProvider value={context}>{children}</LeafletProvider>,
        contentNode
      )
    )
  }

  return forwardRef(ContainerComponent)
}
