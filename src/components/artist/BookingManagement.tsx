import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Textarea } from "../ui/textarea";

export const BookingManagement = () => {
  const [selectedBooking, setSelectedBooking] = useState<string | null>(null);

  const mockBookings = [
    {
      id: "1",
      client: "Sarah Johnson",
      event: "Wedding Photography",
      date: "2024-01-20",
      time: "14:00-18:00",
      location: "Central Park",
      amount: "$2,500",
      status: "pending",
      notes: "Outdoor ceremony, backup indoor location needed"
    },
    {
      id: "2", 
      client: "Mike Chen",
      event: "Corporate Headshots",
      date: "2024-01-18",
      time: "10:00-12:00",
      location: "Downtown Office",
      amount: "$800",
      status: "confirmed",
      notes: "25 employees, professional attire required"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'declined': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Booking Management</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Booking List */}
        <div className="space-y-4">
          {mockBookings.map((booking) => (
            <Card 
              key={booking.id}
              className={`cursor-pointer transition-colors ${selectedBooking === booking.id ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setSelectedBooking(booking.id)}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{booking.event}</CardTitle>
                    <p className="text-gray-600">{booking.client}</p>
                  </div>
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><span className="font-medium">Date:</span> {booking.date}</p>
                  <p><span className="font-medium">Time:</span> {booking.time}</p>
                  <p><span className="font-medium">Location:</span> {booking.location}</p>
                  <p><span className="font-medium">Amount:</span> {booking.amount}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking Details & Actions */}
        <div>
          {selectedBooking ? (
            <Card>
              <CardHeader>
                <CardTitle>Booking Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockBookings.find(b => b.id === selectedBooking)?.status === 'pending' && (
                  <div className="flex space-x-2">
                    <Button className="flex-1">Accept</Button>
                    <Button variant="outline" className="flex-1">Decline</Button>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium mb-2">Internal Notes</label>
                  <Textarea 
                    placeholder="Add notes about this booking..."
                    defaultValue={mockBookings.find(b => b.id === selectedBooking)?.notes}
                  />
                </div>
                
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">Send Message to Client</Button>
                  <Button variant="outline" className="w-full">View Contract</Button>
                  <Button variant="outline" className="w-full">Generate Invoice</Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500">Select a booking to view details and actions</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};