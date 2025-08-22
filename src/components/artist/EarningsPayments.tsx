import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

export const EarningsPayments = () => {
  const mockEarnings = {
    total: "$45,230",
    thisMonth: "$8,950",
    pending: "$2,400",
    paid: "$42,830"
  };

  const mockPayments = [
    {
      id: "1",
      client: "Sarah Johnson Wedding",
      amount: "$2,500",
      type: "Final Payment",
      status: "completed",
      date: "2024-01-15"
    },
    {
      id: "2",
      client: "Corporate Event",
      amount: "$1,200",
      type: "Advance Payment", 
      status: "pending",
      date: "2024-01-18"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'pending': return 'text-yellow-600';
      case 'overdue': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Earnings & Payments</h2>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockEarnings.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockEarnings.thisMonth}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{mockEarnings.pending}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">Paid Out</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{mockEarnings.paid}</div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Completed Payments</span>
                <span>85%</span>
              </div>
              <Progress value={85} />
            </div>
            <div className="text-sm text-gray-600">
              {mockEarnings.paid} of {mockEarnings.total} received
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Payments */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Recent Payments</CardTitle>
            <Button variant="outline" size="sm">Download All Invoices</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{payment.client}</h4>
                  <p className="text-sm text-gray-600">{payment.type} • {payment.date}</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{payment.amount}</div>
                  <div className={`text-sm ${getStatusColor(payment.status)}`}>
                    {payment.status}
                  </div>
                </div>
                <Button variant="outline" size="sm">Invoice</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Earnings Graph Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Earnings Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Earnings chart will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};