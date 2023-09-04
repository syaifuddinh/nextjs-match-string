import type { Metadata } from 'next'
import { wrapper } from "@/store/store"


export const metadata: Metadata = {
  title: 'Lilistyle Ecommerce',
  description: 'Lilistyle Ecommerce',
}

const  RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
       {children}
    </>
  )
}

export default wrapper.withRedux(RootLayout);