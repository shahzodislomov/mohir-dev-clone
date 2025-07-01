import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-sky-950 pt-20 pb-10 px-6">
      {/* CTA Section inside footer */}
      <div className="relative w-full max-w-6xl mx-auto h-[300px] bg-gray-700 rounded-xl flex items-center justify-between px-10 overflow-visible">
        {/* Left side text */}
        <div className="max-w-xl space-y-4">
          <p className="text-4xl text-white font-bold leading-tight">
            Kasb tanlashdagi birinchi yordamni beramiz
          </p>
          <p className="text-white font-semibold">
            Ma'lumotlaringizni qoldiring va sizga tez fursatda aloqaga chiqamiz
          </p>
        </div>

        {/* Right side card that overflows */}
        <Card className="absolute right-0  z-40 w-[30vh] h-[30vh] p-6 shadow-2xl">
          <p className="font-semibold text-xl mb-2">Ro'yxatdan o'tish</p>
          <p className="text-sm text-muted-foreground">
            Formani to'ldiring va biz siz bilan bog'lanamiz.
          </p>
        </Card>
      </div>

      {/* Optional: Footer content below */}
      <div className="mt-24 text-center text-white/70 text-sm">
        <Separator className="my-6 bg-white/20" />
        © {new Date().getFullYear()} Mohirdev. Barcha huquqlar himoyalangan.
      </div>
    </div>
  )
}

export default Footer
