import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Search, Package, MapPin, Calendar, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { SupplyChainTracker } from "@/components/SupplyChainTracker";

const TrackProduct = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Track Product</h1>
            <div className="w-24" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Track Your Product</CardTitle>
              <CardDescription className="text-lg">
                Enter a product ID, batch number, or QR code to trace its journey
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="productId">Product ID or Batch Number</Label>
                <div className="flex space-x-2">
                  <Input
                    id="productId"
                    placeholder="Enter product ID (e.g., HH-2024-001)"
                    className="flex-1"
                  />
                  <Button className="bg-gradient-primary text-primary-foreground">
                    <Search className="h-4 w-4 mr-2" />
                    Track
                  </Button>
                </div>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                Or scan QR code with your mobile device
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sample Tracking Results */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Sample Tracking Result</h2>
            <p className="text-muted-foreground">Product ID: HH-2024-001 - Organic Tomatoes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Variety:</span>
                    <span>Roma Tomatoes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weight:</span>
                    <span>5kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Grade:</span>
                    <span className="text-green-600">Premium A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certification:</span>
                    <span>Organic</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Farm Origin</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Farm:</span>
                    <span>Green Valley Farm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Farmer:</span>
                    <span>John Smith</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span>California, USA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Coordinates:</span>
                    <span className="text-xs">36.7783°N, 119.4179°W</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Planted:</span>
                    <span>Mar 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Harvested:</span>
                    <span>Jun 20, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processed:</span>
                    <span>Jun 21, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipped:</span>
                    <span>Jun 22, 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Supply Chain Visualization */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Supply Chain Journey</h2>
            <p className="text-muted-foreground">Real-time tracking from farm to your table</p>
          </div>
          <SupplyChainTracker />
        </div>
      </div>
    </div>
  );
};

export default TrackProduct;