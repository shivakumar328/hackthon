import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Shield, Users, Truck, ShoppingCart, Leaf, ChartBar, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { SupplyChainTracker } from "@/components/SupplyChainTracker";
import { ProductVerification } from "@/components/ProductVerification";
import { StakeholderDashboard } from "@/components/StakeholderDashboard";
const Index = () => {
  return <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Harvest Hub</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <Button variant="ghost" asChild>
                <Link to="/track">Track Product</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/verify">Verify</Link>
              </Button>
              <Button className="bg-gradient-primary text-primary-foreground shadow-elegant" asChild>
                <Link to="/get-started">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Blockchain-Powered Transparency
          </Badge>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Transparent Supply Chain for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Agricultural Produce</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Track your agricultural products from farm to consumer with complete transparency. 
            Verify quality, origin, and fair pricing through blockchain technology.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-elegant" asChild>
              <Link to="/track">
                Start Tracking
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/get-started">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Complete Supply Chain Visibility
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our blockchain platform ensures every step is recorded, verified, and transparent
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card transition-smooth hover:shadow-elegant">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Farm Origin</CardTitle>
                <CardDescription>
                  Track products from the source farm with verified farmer credentials
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-card transition-smooth hover:shadow-elegant">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Distribution</CardTitle>
                <CardDescription>
                  Monitor transportation routes, temperature, and handling conditions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-card transition-smooth hover:shadow-elegant">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Quality Assurance</CardTitle>
                <CardDescription>
                  Automated quality checks and certifications at every stage
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-card transition-smooth hover:shadow-elegant">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Retail Ready</CardTitle>
                <CardDescription>
                  Verified products reach consumers with complete traceability
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Supply Chain Tracker Component */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Live Supply Chain Tracking
            </h3>
            <p className="text-muted-foreground">
              See how products move through the supply chain in real-time
            </p>
          </div>
          <SupplyChainTracker />
        </div>
      </section>

      {/* Product Verification */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Verify Product Authenticity
            </h3>
            <p className="text-muted-foreground">
              Scan QR codes or enter batch numbers to verify product information
            </p>
          </div>
          <ProductVerification />
        </div>
      </section>

      {/* Stakeholder Dashboard */}
      

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-muted-foreground">Verified Farms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-muted-foreground">Products Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Transparency Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15%</div>
              <div className="text-muted-foreground">Price Increase for Farmers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t py-12 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">Harvest Hub</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Harvest Hub. Powered by blockchain technology.
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;