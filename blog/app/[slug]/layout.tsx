import Banner from "@/components/Banner"
import Header from "@/components/Header"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='bg-[#134611] text-[#A7CECB]' lang="en">
      <body>
        <Header/>
        {children}
        </body>
    </html>
  )
}