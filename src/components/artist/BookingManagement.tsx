import * as React from "react"
import { useState } from "react";
import { MessageSquare, Check, X, Eye, FileText, Clock } from "lucide-react";
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as DialogPrimitive from "@radix-ui/react-dialog"
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

// Textarea Component (inline)
const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

// Tabs Components (inline)
const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

// Dialog Components (inline)
const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-500", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export const BookingManagement = () => {
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [response, setResponse] = useState("");

  // Mock booking requests data
  const bookingRequests = [
    {
      id: 1,
      client: "Sarah Johnson",
      event: "Wedding Photography",
      date: "December 25, 2024",
      time: "2:00 PM - 8:00 PM",
      location: "Grand Ballroom, NYC",
      budget: "$1,500",
      status: "pending",
      message: "Hi! We're looking for a photographer for our wedding. We love your portfolio and would like to discuss the details.",
      submittedAt: "2 hours ago",
      notes: ""
    },
    {
      id: 2,
      client: "Tech Corp Inc.",
      event: "Corporate Event Photography",
      date: "December 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Corp HQ, Manhattan",
      budget: "$800",
      status: "pending",
      message: "We need professional photography for our annual company event. Please let us know your availability.",
      submittedAt: "1 day ago",
      notes: ""
    },
    {
      id: 3,
      client: "Emma Davis",
      event: "Portrait Session",
      date: "December 18, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Central Park, NYC",
      budget: "$300",
      status: "accepted",
      message: "Looking for outdoor portrait session for my professional headshots.",
      submittedAt: "3 days ago",
      notes: "Client prefers natural lighting. Bring reflectors."
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>;
      case "accepted":
        return <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">Accepted</Badge>;
      case "declined":
        return <Badge variant="destructive">Declined</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleAccept = (requestId: number) => {
    console.log("Accepting request:", requestId);
    // Handle accept logic
  };

  const handleDecline = (requestId: number) => {
    console.log("Declining request:", requestId);
    // Handle decline logic
  };

  const pendingRequests = bookingRequests.filter(req => req.status === "pending");
  const acceptedRequests = bookingRequests.filter(req => req.status === "accepted");
  const allRequests = bookingRequests;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <MessageSquare className="mr-2 h-6 w-6" />
          Booking Management
        </h2>
        <p className="text-gray-500">Manage incoming booking requests and track accepted bookings</p>
      </div>

      {/* Booking Requests Tabs */}
      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending" className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Pending ({pendingRequests.length})</span>
          </TabsTrigger>
          <TabsTrigger value="accepted" className="flex items-center space-x-2">
            <Check className="h-4 w-4" />
            <span>Accepted ({acceptedRequests.length})</span>
          </TabsTrigger>
          <TabsTrigger value="all" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>All Requests ({allRequests.length})</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {pendingRequests.map((request) => (
            <BookingRequestCard
              key={request.id}
              request={request}
              onAccept={handleAccept}
              onDecline={handleDecline}
              onViewDetails={setSelectedRequest}
              showActions={true}
            />
          ))}
          {pendingRequests.length === 0 && (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-gray-500">No pending requests at the moment.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="accepted" className="space-y-4">
          {acceptedRequests.map((request) => (
            <BookingRequestCard
              key={request.id}
              request={request}
              onAccept={handleAccept}
              onDecline={handleDecline}
              onViewDetails={setSelectedRequest}
              showActions={false}
            />
          ))}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          {allRequests.map((request) => (
            <BookingRequestCard
              key={request.id}
              request={request}
              onAccept={handleAccept}
              onDecline={handleDecline}
              onViewDetails={setSelectedRequest}
              showActions={request.status === "pending"}
            />
          ))}
        </TabsContent>
      </Tabs>

      {/* Booking Details Modal */}
      {selectedRequest && (
        <BookingDetailsModal
          request={selectedRequest}
          isOpen={!!selectedRequest}
          onClose={() => setSelectedRequest(null)}
          response={response}
          setResponse={setResponse}
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      )}
    </div>
  );
};

// Booking Request Card Component
const BookingRequestCard = ({ request, onAccept, onDecline, onViewDetails, showActions }: any) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardHeader>
      <div className="flex justify-between items-start">
        <div>
          <CardTitle className="text-lg">{request.event}</CardTitle>
          <CardDescription className="text-base font-medium text-gray-900">
            {request.client}
          </CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          {getStatusBadge(request.status)}
          <span className="text-sm text-gray-500">{request.submittedAt}</span>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <span className="font-medium">Date:</span>
          <div className="text-gray-500">{request.date}</div>
        </div>
        <div>
          <span className="font-medium">Time:</span>
          <div className="text-gray-500">{request.time}</div>
        </div>
        <div>
          <span className="font-medium">Budget:</span>
          <div className="text-gray-500">{request.budget}</div>
        </div>
      </div>

      <div>
        <span className="font-medium text-sm">Location:</span>
        <div className="text-gray-500 text-sm">{request.location}</div>
      </div>

      <div>
        <span className="font-medium text-sm">Message:</span>
        <div className="text-gray-500 text-sm mt-1">{request.message}</div>
      </div>

      {request.notes && (
        <div>
          <span className="font-medium text-sm">Notes:</span>
          <div className="text-gray-500 text-sm mt-1">{request.notes}</div>
        </div>
      )}

      <div className="flex items-center justify-between pt-4">
        <Button variant="outline" onClick={() => onViewDetails(request)}>
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
        
        {showActions && (
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => onDecline(request.id)}>
              <X className="h-4 w-4 mr-2" />
              Decline
            </Button>
            <Button onClick={() => onAccept(request.id)}>
              <Check className="h-4 w-4 mr-2" />
              Accept
            </Button>
          </div>
        )}
      </div>
    </CardContent>
  </Card>
);

// Booking Details Modal Component
const BookingDetailsModal = ({ request, isOpen, onClose, response, setResponse, onAccept, onDecline }: any) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-2xl">
      <DialogHeader>
        <DialogTitle>{request.event}</DialogTitle>
        <DialogDescription>Booking request from {request.client}</DialogDescription>
      </DialogHeader>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Date</label>
            <div className="text-gray-500">{request.date}</div>
          </div>
          <div>
            <label className="text-sm font-medium">Time</label>
            <div className="text-gray-500">{request.time}</div>
          </div>
          <div>
            <label className="text-sm font-medium">Location</label>
            <div className="text-gray-500">{request.location}</div>
          </div>
          <div>
            <label className="text-sm font-medium">Budget</label>
            <div className="text-gray-500">{request.budget}</div>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Client Message</label>
          <div className="text-gray-500 mt-1 p-3 bg-gray-100 rounded-lg">{request.message}</div>
        </div>

        <div>
          <label className="text-sm font-medium">Your Response (Optional)</label>
          <Textarea
            placeholder="Add a message to your response..."
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            className="mt-1"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Internal Notes</label>
          <Textarea
            placeholder="Add internal notes for this booking..."
            className="mt-1"
          />
        </div>

        {request.status === "pending" && (
          <div className="flex space-x-3 pt-4">
            <Button variant="outline" onClick={() => onDecline(request.id)} className="flex-1">
              <X className="h-4 w-4 mr-2" />
              Decline Request
            </Button>
            <Button onClick={() => onAccept(request.id)} className="flex-1">
              <Check className="h-4 w-4 mr-2" />
              Accept Request
            </Button>
          </div>     
        )}
      </div>
    </DialogContent>
  </Dialog>
);

const getStatusBadge = (status: string) => {
  switch (status) {
    case "pending":
      return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>;
    case "accepted":
      return <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">Accepted</Badge>;
    case "declined":
      return <Badge variant="destructive">Declined</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};