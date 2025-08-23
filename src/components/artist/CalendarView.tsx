import * as React from "react"
import { useState } from "react";
import { Calendar, Clock, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

// Button Component (inline)
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
        link: "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// Card Components (inline)
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm", className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-gray-500", className)} {...props} />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

// Badge Component (inline)
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
        secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200",
        destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
        outline: "text-gray-950",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"week" | "month">("week");

  // Mock data for availability and bookings
  const availabilitySlots = [
    { day: "Monday", time: "9:00 AM - 12:00 PM", available: true },
    { day: "Monday", time: "2:00 PM - 6:00 PM", available: true },
    { day: "Tuesday", time: "10:00 AM - 4:00 PM", available: false, booking: "Wedding Photography" },
    { day: "Wednesday", time: "9:00 AM - 1:00 PM", available: true },
    { day: "Thursday", time: "3:00 PM - 8:00 PM", available: false, booking: "Portrait Session" },
    { day: "Friday", time: "10:00 AM - 6:00 PM", available: true },
  ];

  const upcomingBookings = [
    { date: "Dec 15", time: "2:00 PM", event: "Wedding Photography", client: "Sarah & John", status: "confirmed" },
    { date: "Dec 18", time: "3:00 PM", event: "Portrait Session", client: "Emma Davis", status: "confirmed" },
    { date: "Dec 22", time: "10:00 AM", event: "Corporate Event", client: "Tech Corp", status: "pending" },
  ];

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Calendar className="mr-2 h-6 w-6" />
            Calendar & Availability
          </h2>
          <p className="text-gray-500">Manage your availability and view upcoming bookings</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === "week" ? "default" : "outline"}
            onClick={() => setViewMode("week")}
            size="sm"
          >
            Week
          </Button>
          <Button
            variant={viewMode === "month" ? "default" : "outline"}
            onClick={() => setViewMode("month")}
            size="sm"
          >
            Month
          </Button>
          <Button className="ml-4">
            <Plus className="h-4 w-4 mr-2" />
            Add Availability
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Navigation */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{formatMonth(currentDate)}</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" onClick={() => navigateMonth('prev')}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => navigateMonth('next')}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Weekly View */}
              {viewMode === "week" && (
                <div className="space-y-4">
                  {availabilitySlots.map((slot, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium">{slot.day}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {slot.time}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {slot.available ? (
                          <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                            Available
                          </Badge>
                        ) : (
                          <>
                            <Badge variant="secondary" className="bg-red-100 text-red-800 border-red-200">
                              Booked
                            </Badge>
                            {slot.booking && (
                              <span className="text-sm text-gray-500">{slot.booking}</span>
                            )}
                          </>
                        )}
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Monthly View */}
              {viewMode === "month" && (
                <div className="grid grid-cols-7 gap-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => (
                    <div key={i} className="aspect-square p-1">
                      <div className="w-full h-full border border-gray-200 rounded flex items-center justify-center text-sm hover:bg-gray-50 cursor-pointer">
                        {Math.floor(Math.random() * 28) + 1}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Bookings Sidebar */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Bookings</CardTitle>
              <CardDescription>Your confirmed and pending events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingBookings.map((booking, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-sm">{booking.event}</div>
                    <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                      {booking.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500">
                    <div>{booking.client}</div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {booking.date} at {booking.time}
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Bookings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};