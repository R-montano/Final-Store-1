import React from 'react'
import { ShoppingBag } from 'lucide-react'

const Logo = () => {
  return (
  <div className="ml-6 flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-100 to-rose-50 px-4 py-1 shadow-md">
    <ShoppingBag className="text-blue-700 w-5 h-5 drop-shadow-sm" />
    <span className="text-rose-600 text-base font-bold drop-shadow-sm tracking-wide">
      EstiloYa!!!
    </span>
  </div>

  )
}

export default Logo