"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AssessmentForm } from "./assessment-form"

interface AssessmentDialogProps {
  trigger?: React.ReactNode
  className?: string
  variant?: "default" | "outline"
}

export function AssessmentDialog({
  trigger,
  className,
  variant = "default",
}: AssessmentDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button className={className} variant={variant}>
            Start Your Assessment
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-h3 font-heading font-semibold text-forest">
            Start Your Cultivate Assessment
          </DialogTitle>
          <DialogDescription className="text-soil/80">
            Take 15-20 minutes to reflect on your business journey and discover your natural path to growth.
          </DialogDescription>
        </DialogHeader>
        <AssessmentForm />
      </DialogContent>
    </Dialog>
  )
}
