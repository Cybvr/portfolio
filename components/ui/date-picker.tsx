"use client"

import { useState } from "react"
import { format, isValid, parseISO } from "date-fns"
import { CalendarDays, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface DatePickerProps {
  id?: string
  value?: string
  onChange: (value: string) => void
  disabled?: boolean
  className?: string
}

function parseStoredDate(value?: string) {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined

  const date = parseISO(value)
  return isValid(date) && format(date, "yyyy-MM-dd") === value ? date : undefined
}

export function DatePicker({
  id,
  value,
  onChange,
  disabled,
  className,
}: DatePickerProps) {
  const [open, setOpen] = useState(false)
  const selectedDate = parseStoredDate(value)
  const hasInvalidValue = Boolean(value && !selectedDate)

  const selectDate = (date: Date) => {
    onChange(format(date, "yyyy-MM-dd"))
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          type="button"
          variant="outline"
          disabled={disabled}
          aria-invalid={hasInvalidValue || undefined}
          className={cn(
            "h-12 w-full justify-between rounded-xl border-input bg-background px-3 text-left text-sm font-normal shadow-sm hover:bg-muted/60 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
            !selectedDate && "text-foreground",
            hasInvalidValue && "border-destructive text-destructive",
            className
          )}
        >
          <span className="flex min-w-0 items-center gap-3">
            <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="truncate">
              {selectedDate
                ? format(selectedDate, "MMMM d, yyyy")
                : hasInvalidValue
                  ? "Choose a valid date"
                  : "Choose publication date"}
            </span>
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-foreground transition-transform",
              open && "rotate-180"
            )}
            aria-hidden="true"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          defaultMonth={selectedDate ?? new Date()}
          onSelect={(date) => {
            if (date) selectDate(date)
          }}
          autoFocus
        />
        <div className="mt-2 flex items-center justify-between border-t border-border px-1 pt-3">
          <span className="text-xs text-foreground">
            {selectedDate ? format(selectedDate, "EEE, MMM d") : "No date selected"}
          </span>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 rounded-lg px-3"
            onClick={() => selectDate(new Date())}
          >
            Today
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
