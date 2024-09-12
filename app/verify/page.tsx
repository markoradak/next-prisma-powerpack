'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RiMailCheckFill, RiCheckboxCircleLine } from "@remixicon/react"

export default function EmailLinkSent() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 text-primary">
            <RiMailCheckFill className="h-12 w-12" />
          </div>
          <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
          <CardDescription>We&apos;ve sent you a login link</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4 text-muted-foreground">
            We&apos;ve sent an email with a login link to your inbox. Please click on the link to log in to your account.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-primary">
            <RiCheckboxCircleLine className="h-5 w-5" />
            <span>Email sent successfully</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}