/* eslint-disable @next/next/no-head-element */
import './output.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="w-screen overflow-x-hidden bg-body scrollbar scrollbar-track-vicious-black scrollbar-thumb-vicious-primary scrollbar-thumb-rounded-full">
        {children}
      </body>
    </html>
  );
}
