"use client"

import * as React from "react"
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react"
import { DayPicker, type DayPickerProps } from "react-day-picker"

import { cn } from "@/lib/utils"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  components,
  ...props
}: DayPickerProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("relative p-1", className)}
      classNames={{
        months: "flex flex-col",
        month: "space-y-4",
        month_caption: "flex h-10 items-center justify-center px-10",
        caption_label: "text-sm font-semibold text-foreground",
        nav: "absolute inset-x-1 top-1 flex items-center justify-between",
        button_previous:
          "inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-40",
        button_next:
          "inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-40",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday:
          "w-10 py-2 text-center text-[11px] font-medium uppercase tracking-wider text-foreground",
        week: "mt-1 flex w-full",
        day: "h-10 w-10 p-0 text-center text-sm",
        day_button:
          "inline-flex h-10 w-10 items-center justify-center rounded-lg font-normal text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        today:
          "[&>button]:border [&>button]:border-primary/40 [&>button]:font-semibold [&>button]:text-primary",
        selected:
          "[&>button]:bg-primary [&>button]:font-semibold [&>button]:text-primary-foreground [&>button]:hover:bg-primary",
        outside: "[&>button]:text-foreground/50",
        disabled: "[&>button]:cursor-not-allowed [&>button]:opacity-35",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ className: chevronClassName, orientation, ...chevronProps }) => {
          const Icon =
            orientation === "left"
              ? ChevronLeft
              : orientation === "right"
                ? ChevronRight
                : orientation === "up"
                  ? ChevronUp
                  : ChevronDown

          return <Icon className={cn("h-4 w-4", chevronClassName)} {...chevronProps} />
        },
        ...components,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
