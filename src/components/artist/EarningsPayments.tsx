import * as React from "react"
import { useState } from "react";
import { DollarSign, Download, TrendingUp, Calendar, CreditCard, FileText } from "lucide-react";
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as SelectPrimitive from "@radix-ui/react-select"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "../../lib/utils"

// Inline UI components with direct Tailwind classes
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; size?: string }>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900"
    }
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3"
    }
    return (
      <button
        className={cn(baseStyles, variants[variant as keyof typeof variants], sizes[size as keyof typeof sizes], className)}
        ref={ref}
        {...props}
      />
    )
  }
)

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm", className)} {...props} />
)

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
)

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
)

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-gray-500", className)} {...props} />
)

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
)

const Badge = ({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: string }) => {
  const variants = {
    default: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200"
  }
  return (
    <div className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", variants[variant as keyof typeof variants], className)} {...props} />
  )
}

const Select = SelectPrimitive.Root
const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn("flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm", className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
)

const SelectContent = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Content>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>>(
  ({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white text-gray-950 shadow-md", className)}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport className="p-1">
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
)

const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100", className)}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
)

const SelectValue = SelectPrimitive.Value

const Progress = ({ value = 0, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { value?: number }) => (
  <div className={cn("relative h-4 w-full overflow-hidden rounded-full bg-gray-200", className)} {...props}>
    <div className="h-full w-full flex-1 bg-blue-600 transition-all" style={{ transform: `translateX(-${100 - value}%)` }} />
  </div>
)

export const EarningsPayments = () => {
  const [timeframe, setTimeframe] = useState("monthly");

  // Mock data for earnings
  const totalEarnings = {
    thisMonth: 3240,
    lastMonth: 2890,
    thisYear: 28650,
    lastYear: 22100
  };

  const monthlyBreakdown = [
    { month: "December", earnings: 3240, bookings: 8, avgPerBooking: 405 },
    { month: "November", earnings: 2890, bookings: 7, avgPerBooking: 413 },
    { month: "October", earnings: 3150, bookings: 9, avgPerBooking: 350 },
    { month: "September", earnings: 2750, bookings: 6, avgPerBooking: 458 },
  ];

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
      type: "deposit",
      date: "Dec 8, 2024",
      status: "completed",
      invoice: "INV-002"
    },
    {
      id: 3,
      event: "Portrait Session - Emma Davis",
      amount: 300,
      type: "final",
      date: "Dec 5, 2024",
      status: "completed",
      invoice: "INV-003"
    },
    {
      id: 4,
      event: "Wedding Photography - Mike & Lisa",
      amount: 750,
      type: "deposit",
      date: "Dec 3, 2024",
      status: "pending",
      invoice: "INV-004"
    },
  ];

  const paymentMethods = [
    { type: "Bank Transfer", account: "****1234", isDefault: true },
    { type: "PayPal", account: "john@example.com", isDefault: false },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>;
      case "pending":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>;
      case "failed":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "deposit":
        return <Badge variant="secondary">Deposit</Badge>;
      case "final":
        return <Badge>Final Payment</Badge>;
      case "refund":
        return <Badge className="bg-orange-100 text-orange-800 border-orange-200">Refund</Badge>;
      default:
        return <Badge variant="secondary">{type}</Badge>;
    }
  };

  const currentEarnings = timeframe === "monthly" ? totalEarnings.thisMonth : totalEarnings.thisYear;
  const previousEarnings = timeframe === "monthly" ? totalEarnings.lastMonth : totalEarnings.lastYear;
  const growthPercentage = ((currentEarnings - previousEarnings) / previousEarnings * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <DollarSign className="mr-2 h-6 w-6" />
            Earnings & Payments
          </h2>
          <p className="text-gray-500">Track your earnings, payments, and download invoices</p>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Earnings Overview</CardTitle>
            <CardDescription>
              Your {timeframe} earnings performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">${currentEarnings.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">
                    {timeframe === "monthly" ? "This Month" : "This Year"}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className={`h-4 w-4 ${parseFloat(growthPercentage) >= 0 ? "text-green-500" : "text-red-500"}`} />
                  <span className={`text-sm font-medium ${parseFloat(growthPercentage) >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {parseFloat(growthPercentage) >= 0 ? "+" : ""}{growthPercentage}%
                  </span>
                  <span className="text-sm text-gray-500">
                    vs {timeframe === "monthly" ? "last month" : "last year"}
                  </span>
                </div>
              </div>

              {timeframe === "monthly" && (
                <div className="space-y-4">
                  <h4 className="font-medium">Monthly Breakdown</h4>
                  {monthlyBreakdown.map((month, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">{month.month}</div>
                        <div className="text-sm text-gray-500">{month.bookings} bookings</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${month.earnings.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">${month.avgPerBooking} avg</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </CardHeader>
        </Card>

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Payment Methods</CardTitle>
            <CardDescription>Manage your payout preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-4 w-4 text-gray-400" />
                  <div>
                    <div className="font-medium text-sm">{method.type}</div>
                    <div className="text-xs text-gray-500">{method.account}</div>
                  </div>
                </div>
                {method.isDefault && (
                  <Badge variant="secondary" className="text-xs">Default</Badge>
                )}
              </div>
            ))}
            <Button variant="outline" className="w-full">
              Add Payment Method
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Recent Transactions</CardTitle>
              <CardDescription>Your latest payments and invoices</CardDescription>
            </div>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="font-medium">{transaction.event}</div>
                  <div className="text-sm text-gray-500 flex items-center space-x-4 mt-1">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {transaction.date}
                    </span>
                    <span>Invoice: {transaction.invoice}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-medium">${transaction.amount}</div>
                    <div className="flex items-center space-x-2 mt-1">
                      {getTypeBadge(transaction.type)}
                      {getStatusBadge(transaction.status)}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-3 w-3 mr-1" />
                    Invoice
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Earnings Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Monthly Goals</CardTitle>
          <CardDescription>Track your progress towards monthly targets</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Earnings Goal</span>
              <span className="text-sm text-gray-500">$3,240 / $4,000</span>
            </div>
            <Progress value={81} className="h-2" />
            <div className="text-xs text-gray-500 mt-1">81% of monthly goal achieved</div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Bookings Goal</span>
              <span className="text-sm text-gray-500">8 / 10</span>
            </div>
            <Progress value={80} className="h-2" />
            <div className="text-xs text-gray-500 mt-1">80% of booking goal achieved</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
