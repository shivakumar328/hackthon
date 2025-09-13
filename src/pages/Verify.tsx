import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, CheckCircle, XCircle, AlertCircle, QrCode } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductVerification } from "@/components/ProductVerification";

const Verify = () => {
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
            <h1 className="text-2xl font-bold text-foreground">Product Verification</h1>
            <div className="w-24" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Verification Instructions */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Verify Product Authenticity</h2>
            <p className="text-lg text-muted-foreground">
              Ensure your agricultural products are genuine and meet quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-card text-center">
              <CardHeader>
                <QrCode className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Scan QR Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use your mobile device to scan the QR code on the product packaging
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Enter Batch ID</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Manually enter the batch number printed on your product
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Get Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Receive instant verification results and product details
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Verification Component */}
        <div className="max-w-4xl mx-auto mb-12">
          <ProductVerification />
        </div>

        {/* Sample Verification Results */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Recent Verifications</h2>
            <p className="text-muted-foreground">Examples of product verification results</p>
          </div>

          <div className="space-y-4">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                    <div>
                      <h3 className="font-semibold">Organic Roma Tomatoes</h3>
                      <p className="text-sm text-muted-foreground">Batch: HH-2024-001 • Green Valley Farm</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="default" className="bg-green-100 text-green-800">Verified</Badge>
                    <Badge variant="outline">Organic</Badge>
                    <Badge variant="outline">Grade A</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <AlertCircle className="h-8 w-8 text-yellow-500" />
                    <div>
                      <h3 className="font-semibold">Fresh Spinach</h3>
                      <p className="text-sm text-muted-foreground">Batch: HH-2024-087 • Sunset Farms</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Pending Review</Badge>
                    <Badge variant="outline">Conventional</Badge>
                    <Badge variant="outline">Grade B</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <XCircle className="h-8 w-8 text-red-500" />
                    <div>
                      <h3 className="font-semibold">Bell Peppers</h3>
                      <p className="text-sm text-muted-foreground">Batch: FAKE-001 • Unknown Source</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="destructive">Not Verified</Badge>
                    <Badge variant="outline" className="text-red-600 border-red-200">Suspicious</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 p-6 bg-primary/5 rounded-lg border">
            <h3 className="font-semibold text-foreground mb-4">What Our Verification Covers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Farm origin and farmer credentials</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Quality certifications and grades</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Transportation and storage conditions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Organic and sustainability certifications</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Blockchain transaction verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Third-party quality inspection reports</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;