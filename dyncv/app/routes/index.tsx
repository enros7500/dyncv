

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Navbar from '~/components/navbar'
import Sidebar from '~/components/sidebar';

export default function Index() {
  return ([
      <>
        <Navbar key="first"/>
          <Sidebar />
        <h1>Hey Dud</h1>
      </>
  ]);
}
