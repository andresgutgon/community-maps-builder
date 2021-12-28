import { Fragment } from 'react'
import { CheckIcon } from '@heroicons/react/outline'
import { Transition } from '@headlessui/react'

type Props = { message: string, show: boolean }
const SuccessMessage = ({ show, message }: Props) => {
  return (
    <Transition.Root show={show}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-x-4"
        enterTo="opacity-100 translate-x-0"
      >
        <div className='space-y-4 flex flex-col items-center justify-center'>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-15"
            enterTo="opacity-100 scale-100"
          >
            <div className='h-20 w-20 rounded-full border border-green-600 flex items-center justify-center'>
              <CheckIcon className="h-10 w-10 text-green-600" aria-hidden="true" />
            </div>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-x-10"
            enterTo="opacity-100 translate-x-0"
          >
            <span className='text-lg text-center'>{message}</span>
          </Transition.Child>
        </div>
      </Transition.Child>
    </Transition.Root>
  )
}

export default SuccessMessage
