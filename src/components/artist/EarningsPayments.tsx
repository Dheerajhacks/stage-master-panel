import { useState } from "react";
import { DollarSign, Download, TrendingUp, Calendar, CreditCard, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

export const EarningsPayments = () => {
  const [timeframe, setTimeframe] = useState("monthly");

  // Mock earnings data
  const totalEarnings = {
    thisMonth: 3240,
    lastMonth: 2890,
    thisYear: 28650,
    lastYear: 22100
  };

  const recentTransactions = [
    {
      id: 1,
      event: "Wedding Photography - Sarah & John",
      amount: 1500,
      type: "final",
      date: "Dec 10, 2024",
      status: "completed",
      invoice: "INV-001"
    },
    {
      id: 2,
      event: "Corporate Event - Tech Corp",
      amount: 800,
      type: "full",
      date: "Dec 8, 2024",
      status: "completed",
      invoice: "INV-002"
    },
    {
      id: 3,
      event: "Portrait Session - Emma Davis",
      amount: 150,
      type: "advance",
      date: "Dec 5, 2024",
      status: "pending",
      invoice: "INV-003"
    },
    {
      id: 4,
      event: "Birthday Party Photography",
      amount: 450,
      type: "milestone",
      date: "Dec 3, 2024",
      status: "completed",
      invoice: "INV-004"
    }
  ];

  const upcomingPayments = [
    {
      event: "Wedding Photography - Sarah & John",
      amount: 750,
      type: "final",
      dueDate: "Dec 15, 2024",
      progress: 75
    },
    {
      event: "Portrait Session - Emma Davis",
      amount: 150,
      type: "final",
      dueDate: "Dec 18, 2024",
      progress: 50
    }
  ];

  const monthlyData = [
    { month: "Jan", amount: 2100 },
    { month: "Feb", amount: 2350 },
    { month: "Mar", amount: 2800 },
    { month: "Apr", amount: 2200 },
    { month: "May", amount: 2900 },
    { month: "Jun", amount: 3100 },
    { month: "Jul", amount: 2650 },
    { month: "Aug", amount: 3200 },
    { month: "Sep", amount: 2800 },
    { month: "Oct", amount: 3400 },
    { month: "Nov", amount: 2890 },
    { month: "Dec", amount: 3240 }
  ];

  const getPaymentTypeBadge = (type: string) => {
    const typeConfig = {
      advance: { color: "bg-blue-100 text-blue-800 border-blue-200", label: "Advance" },
      milestone: { color: "bg-purple-100 text-purple-800 border-purple-200", label: "Milestone" },
      final: { color: "bg-green-100 text-green-800 border-green-200", label: "Final" },
      full: { color: "bg-gray-100 text-gray-800 border-gray-200", label: "Full Payment" }
    };
    
    const config = typeConfig[type as keyof typeof typeConfig] || typeConfig.full;
    return <Badge variant="secondary" className={config.color}>{config.label}</Badge>;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">Completed</Badge>;
      case "pending":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>;
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const maxAmount = Math.max(...monthlyData.map(d => d.amount));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground flex items-center">
            <DollarSign className="mr-2 h-6 w-6" />
            Earnings & Payments
          </h2>
          <p className="text-muted-foreground">Track your earnings, payments, and download invoices</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Earnings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalEarnings.thisMonth.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +{Math.round(((totalEarnings.thisMonth - totalEarnings.lastMonth) / totalEarnings.lastMonth) * 100)}% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Year</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalEarnings.thisYear.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +{Math.round(((totalEarnings.thisYear - totalEarnings.lastYear) / totalEarnings.lastYear) * 100)}% from last year
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. per Event</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$650</div>
            <p className="text-xs text-muted-foreground">Based on 24 events</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$900</div>
            <p className="text-xs text-muted-foreground">2 pending payments</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Earnings Chart */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Earnings</CardTitle>
              <CardDescription>Your earnings over the past 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 text-sm font-medium">{data.month}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="h-4 bg-primary rounded-full relative overflow-hidden flex-1 mr-4">
                          <div 
                            className="h-full bg-primary transition-all duration-300"
                            style={{ width: `${(data.amount / maxAmount) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">${data.amount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Payments */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Payments</CardTitle>
              <CardDescription>Expected payments from ongoing projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingPayments.map((payment, index) => (
                <div key={index} className="space-y-3 p-3 border border-border rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium text-sm">{payment.event}</div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Due: {payment.dueDate}</span>
                      {getPaymentTypeBadge(payment.type)}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-medium">${payment.amount}</span>
                    </div>
                    <Progress value={payment.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest payments and invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{transaction.event}</div>
                  <div className="text-sm text-muted-foreground flex items-center space-x-4">
                    <span>{transaction.date}</span>
                    {getPaymentTypeBadge(transaction.type)}
                    {getStatusBadge(transaction.status)}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold">${transaction.amount.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">{transaction.invoice}</div>
                  </div>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Invoice
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline">View All Transactions</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};