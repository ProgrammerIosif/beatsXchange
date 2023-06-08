export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      {children}
    </div>
  )
}
