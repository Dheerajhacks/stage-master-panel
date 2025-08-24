import { useState } from "react";
import { MessageSquare, Check, X, Eye, FileText, Clock } from "lucide-react";
import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as DialogPrimitive from "@radix-ui/react-dialog"

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
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-800 border-yellow-200">Pending</div>;
      case "accepted":
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800 border-green-200">Accepted</div>;
      case "declined":
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-red-600 text-white hover:bg-red-700">Declined</div>;
      default:
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200">{status}</div>;
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
      <TabsPrimitive.Root defaultValue="pending" className="space-y-6">
        <TabsPrimitive.List className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 grid w-full grid-cols-3">
          <TabsPrimitive.Trigger value="pending" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Pending ({pendingRequests.length})</span>
          </TabsPrimitive.Trigger>
          <TabsPrimitive.Trigger value="accepted" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm flex items-center space-x-2">
            <Check className="h-4 w-4" />
            <span>Accepted ({acceptedRequests.length})</span>
          </TabsPrimitive.Trigger>
          <TabsPrimitive.Trigger value="all" className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>All Requests ({allRequests.length})</span>
          </TabsPrimitive.Trigger>
        </TabsPrimitive.List>

        <TabsPrimitive.Content value="pending" className="mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 space-y-4">
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
            <div className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm">
              <div className="p-6 pt-0 text-center py-8">
                <p className="text-gray-500">No pending requests at the moment.</p>
              </div>
            </div>
          )}
        </TabsPrimitive.Content>

        <TabsPrimitive.Content value="accepted" className="mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 space-y-4">
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
        </TabsPrimitive.Content>

        <TabsPrimitive.Content value="all" className="mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 space-y-4">
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
        </TabsPrimitive.Content>
      </TabsPrimitive.Root>

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
const BookingRequestCard = ({ request, onAccept, onDecline, onViewDetails, showActions }: any) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-800 border-yellow-200">Pending</div>;
      case "accepted":
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800 border-green-200">Accepted</div>;
      case "declined":
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-red-600 text-white hover:bg-red-700">Declined</div>;
      default:
        return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200">{status}</div>;
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-lg">{request.event}</h3>
            <p className="text-sm text-gray-500 text-base font-medium text-gray-900">
              {request.client}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {getStatusBadge(request.status)}
            <span className="text-sm text-gray-500">{request.submittedAt}</span>
          </div>
        </div>
      </div>
      <div className="p-6 pt-0 space-y-4">
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
          <button onClick={() => onViewDetails(request)} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </button>
          
          {showActions && (
            <div className="flex space-x-2">
              <button onClick={() => onDecline(request.id)} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2">
                <X className="h-4 w-4 mr-2" />
                Decline
              </button>
              <button onClick={() => onAccept(request.id)} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
                <Check className="h-4 w-4 mr-2" />
                Accept
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Booking Details Modal Component
const BookingDetailsModal = ({ request, isOpen, onClose, response, setResponse, onAccept, onDecline }: any) => (
  <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80" />
      <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 sm:rounded-lg max-w-2xl">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <DialogPrimitive.Title className="text-lg font-semibold leading-none tracking-tight">{request.event}</DialogPrimitive.Title>
          <DialogPrimitive.Description className="text-sm text-gray-500">Booking request from {request.client}</DialogPrimitive.Description>
        </div>
        
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
            <textarea
              className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
              placeholder="Add a message to your response..."
              value={response}
              onChange={(e) => setResponse(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Internal Notes</label>
            <textarea
              className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
              placeholder="Add internal notes for this booking..."
            />
          </div>

          {request.status === "pending" && (
            <div className="flex space-x-3 pt-4">
              <button onClick={() => onDecline(request.id)} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2 flex-1">
                <X className="h-4 w-4 mr-2" />
                Decline Request
              </button>
              <button onClick={() => onAccept(request.id)} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 flex-1">
                <Check className="h-4 w-4 mr-2" />
                Accept Request
              </button>
            </div>     
          )}
        </div>
        
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);