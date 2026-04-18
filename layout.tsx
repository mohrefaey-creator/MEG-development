import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VisitiQ | Advancing Pharma Engagement',
  description:
    'Field-force excellence platform for pharmaceutical and medical-device teams across KSA and GCC.',
  keywords: [
    'VisitiQ',
    'pharma CRM',
    'medical representative CRM',
    'field force excellence',
    'coverage analytics',
    'visit planner',
    'Saudi software',
    'KSA pharma',
    'GCC healthcare',
  ],
  openGraph: {
    title: 'VisitiQ | Advancing Pharma Engagement',
    description:
      'Field-force excellence platform for pharmaceutical and medical-device teams across KSA and GCC.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
