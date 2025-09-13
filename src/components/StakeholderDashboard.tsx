import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Leaf, 
  Truck, 
  ShoppingCart, 
  TrendingUp, 
  Package, 
  CheckCircle, 
  Clock, 
  DollarSign,
  BarChart3,
  Users
} from "lucide-react";

const farmerData = {
  name: "John Smith",
  farm: "Green Valley Farm",
  totalProducts: 156,
  verified: 152,
  revenue: "$45,230",
  avgQualityScore: 96,
  recentBatches: [
    { id: "AGR-2024-001", product: "Organic Tomatoes", status: "In Transit", price: "$4.50/kg" },
    { id: "AGR-2024-002", product: "Bell Peppers", status: "Delivered", price: "$3.20/kg" },
    { id: "AGR-2024-003", product: "Cucumbers", status: "Quality Check", price: "$2.80/kg" }
  ]
};

const distributorData = {
  name: "Fresh Distribution Co.",
  facilities: 12,
  activeShipments: 45,
  avgDeliveryTime: "2.3 days",
  totalVolume: "2,340 tons",
  recentShipments: [
    { id: "SHIP-001", origin: "Green Valley Farm", destination: "City Markets", status: "In Transit" },
    { id: "SHIP-002", origin: "Sunny Acres", destination: "Retail Chain A", status: "Delivered" },
    { id: "SHIP-003", origin: "Organic Fields", destination: "Local Stores", status: "Loading" }
  ]
};

const retailerData = {
  name: "Fresh Market Store",
  stores: 8,
  dailySales: "$12,450",
  verifiedProducts: "89%",
  customerSatisfaction: 4.8,
  inventory: [
    { product: "Organic Tomatoes", stock: 145, supplier: "Green Valley Farm", score: 98 },
    { product: "Bell Peppers", stock: 89, supplier: "Sunny Acres", score: 94 },
    { product: "Cucumbers", stock: 76, supplier: "Organic Fields", score: 96 }
  ]
};

export const StakeholderDashboard = () => {
  const [activeRole, setActiveRole] = useState("farmer");

  return (
    <div className="space-y-6">
      <Tabs value={activeRole} onValueChange={setActiveRole}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="farmer" className="flex items-center space-x-2">
            <Leaf className="w-4 h-4" />
            <span>Farmer</span>
          </TabsTrigger>
          <TabsTrigger value="distributor" className="flex items-center space-x-2">
            <Truck className="w-4 h-4" />
            <span>Distributor</span>
          </TabsTrigger>
          <TabsTrigger value="retailer" className="flex items-center space-x-2">
            <ShoppingCart className="w-4 h-4" />
            <span>Retailer</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="farmer" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Products</p>
                    <p className="text-2xl font-bold text-foreground">{farmerData.totalProducts}</p>
                  </div>
                  <Package className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Revenue</p>
                    <p className="text-2xl font-bold text-foreground">{farmerData.revenue}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Verified Products</p>
                    <p className="text-2xl font-bold text-foreground">{farmerData.verified}</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Quality Score</p>
                    <p className="text-2xl font-bold text-foreground">{farmerData.avgQualityScore}%</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Batches</CardTitle>
              <CardDescription>Track your recent product submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {farmerData.recentBatches.map((batch, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-subtle rounded-lg">
                    <div>
                      <p className="font-medium">{batch.product}</p>
                      <p className="text-sm text-muted-foreground">Batch: {batch.id}</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={batch.status === "Delivered" ? "default" : "secondary"}
                        className={batch.status === "Delivered" ? "bg-success text-success-foreground" : ""}
                      >
                        {batch.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">{batch.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="distributor" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Shipments</p>
                    <p className="text-2xl font-bold text-foreground">{distributorData.activeShipments}</p>
                  </div>
                  <Truck className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Facilities</p>
                    <p className="text-2xl font-bold text-foreground">{distributorData.facilities}</p>
                  </div>
                  <Package className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Delivery</p>
                    <p className="text-2xl font-bold text-foreground">{distributorData.avgDeliveryTime}</p>
                  </div>
                  <Clock className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Volume</p>
                    <p className="text-2xl font-bold text-foreground">{distributorData.totalVolume}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Shipments</CardTitle>
              <CardDescription>Monitor your distribution network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {distributorData.recentShipments.map((shipment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-subtle rounded-lg">
                    <div>
                      <p className="font-medium">{shipment.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {shipment.origin} → {shipment.destination}
                      </p>
                    </div>
                    <Badge
                      variant={shipment.status === "Delivered" ? "default" : "secondary"}
                      className={shipment.status === "Delivered" ? "bg-success text-success-foreground" : ""}
                    >
                      {shipment.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="retailer" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Daily Sales</p>
                    <p className="text-2xl font-bold text-foreground">{retailerData.dailySales}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Store Count</p>
                    <p className="text-2xl font-bold text-foreground">{retailerData.stores}</p>
                  </div>
                  <ShoppingCart className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Verified Products</p>
                    <p className="text-2xl font-bold text-foreground">{retailerData.verifiedProducts}</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Satisfaction</p>
                    <p className="text-2xl font-bold text-foreground">{retailerData.customerSatisfaction}/5</p>
                  </div>
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Current Inventory</CardTitle>
              <CardDescription>Verified products in your stores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {retailerData.inventory.map((item, index) => (
                  <div key={index} className="p-4 bg-gradient-subtle rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">{item.product}</p>
                      <Badge className="bg-primary/10 text-primary">
                        Score: {item.score}%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span>Stock: {item.stock} units</span>
                      <span>Supplier: {item.supplier}</span>
                    </div>
                    <Progress value={item.stock > 100 ? 100 : (item.stock / 100) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};