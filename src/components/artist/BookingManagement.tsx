import { useState } from "react";
import { MessageSquare, Check, X, Eye, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <h2 className="text-2xl font-bold text-foreground flex items-center">
          <MessageSquare className="mr-2 h-6 w-6" />
          Booking Management
        </h2>
        <p className="text-muted-foreground">Manage incoming booking requests and track accepted bookings</p>
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
                <p className="text-muted-foreground">No pending requests at the moment.</p>
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
          <CardDescription className="text-base font-medium text-foreground">
            {request.client}
          </CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          {getStatusBadge(request.status)}
          <span className="text-sm text-muted-foreground">{request.submittedAt}</span>
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <span className="font-medium">Date:</span>
          <div className="text-muted-foreground">{request.date}</div>
        </div>
        <div>
          <span className="font-medium">Time:</span>
          <div className="text-muted-foreground">{request.time}</div>
        </div>
        <div>
          <span className="font-medium">Budget:</span>
          <div className="text-muted-foreground">{request.budget}</div>
        </div>
      </div>

      <div>
        <span className="font-medium text-sm">Location:</span>
        <div className="text-muted-foreground text-sm">{request.location}</div>
      </div>

      <div>
        <span className="font-medium text-sm">Message:</span>
        <div className="text-muted-foreground text-sm mt-1">{request.message}</div>
      </div>

      {request.notes && (
        <div>
          <span className="font-medium text-sm">Notes:</span>
          <div className="text-muted-foreground text-sm mt-1">{request.notes}</div>
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
            <div className="text-muted-foreground">{request.date}</div>
          </div>
          <div>
            <label className="text-sm font-medium">Time</label>
            <div className="text-muted-foreground">{request.time}</div>
          </div>
          <div>
            <label className="text-sm font-medium">Location</label>
            <div className="text-muted-foreground">{request.location}</div>
          </div>
          <div>
            <label className="text-sm font-medium">Budget</label>
            <div className="text-muted-foreground">{request.budget}</div>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Client Message</label>
          <div className="text-muted-foreground mt-1 p-3 bg-muted rounded-lg">{request.message}</div>
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