import Header from "@/components/Header"
import "../globals.css"
import Banner from "@/components/Banner"
import {draftMode} from "next/headers"
import VisualEditing from "@/components/VisualEditing"

export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className="max-w-7xl bg-[#134611]  mx-auto">
        <Header/>
        <Banner/>
          {children}
          {draftMode().isEnabled && <VisualEditing />}
          </body>
      </html>
    )
  }
