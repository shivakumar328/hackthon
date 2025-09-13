import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, QrCode, CheckCircle, AlertTriangle, MapPin, Calendar, User, Truck } from "lucide-react";

const mockVerificationData = {
  "AGR-2024-001": {
    productName: "Organic Tomatoes",
    batchId: "AGR-2024-001",
    farmer: "John Smith",
    farm: "Green Valley Farm",
    location: "Fresno County, CA",
    harvestDate: "2024-01-15",
    certifications: ["USDA Organic", "Fair Trade", "Non-GMO"],
    currentLocation: "Central Distribution Hub",
    status: "verified",
    qualityScore: 98,
    pricePerKg: "$4.50",
    fairTradeBonus: "$0.75"
  }
};

export const ProductVerification = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleVerification = async () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      const result = mockVerificationData[searchTerm as keyof typeof mockVerificationData];
      setVerificationResult(result || null);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-2xl">Product Verification</CardTitle>
          <CardDescription>
            Enter a batch ID or scan a QR code to verify product authenticity and track its journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Enter batch ID (e.g., AGR-2024-001)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-lg"
              />
            </div>
            <Button
              onClick={handleVerification}
              disabled={!searchTerm || isSearching}
              className="bg-gradient-primary text-primary-foreground"
            >
              {isSearching ? (
                "Verifying..."
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Verify
                </>
              )}
            </Button>
            <Button variant="outline">
              <QrCode className="w-4 h-4 mr-2" />
              Scan QR
            </Button>
          </div>

          {verificationResult && (
            <Card className="bg-gradient-subtle border-success/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-success" />
                    <CardTitle className="text-xl text-success">Product Verified</CardTitle>
                  </div>
                  <Badge className="bg-success text-success-foreground">
                    Quality Score: {verificationResult.qualityScore}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{verificationResult.productName}</h3>
                  <p className="text-muted-foreground">Batch ID: {verificationResult.batchId}</p>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-primary" />
                      <div>
                        <p className="font-medium">Farmer</p>
                        <p className="text-sm text-muted-foreground">{verificationResult.farmer}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <div>
                        <p className="font-medium">Farm Location</p>
                        <p className="text-sm text-muted-foreground">{verificationResult.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <div>
                        <p className="font-medium">Harvest Date</p>
                        <p className="text-sm text-muted-foreground">{verificationResult.harvestDate}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Truck className="w-4 h-4 text-primary" />
                      <div>
                        <p className="font-medium">Current Location</p>
                        <p className="text-sm text-muted-foreground">{verificationResult.currentLocation}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Price Information</p>
                      <div className="text-sm space-y-1">
                        <p>Market Price: {verificationResult.pricePerKg}</p>
                        <p className="text-success">Fair Trade Bonus: {verificationResult.fairTradeBonus}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="font-medium mb-2">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {verificationResult.certifications.map((cert: string, index: number) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {searchTerm && !verificationResult && !isSearching && (
            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <p className="text-destructive font-medium">Product not found</p>
                </div>
                <p className="text-sm text-destructive/80 mt-2">
                  The batch ID "{searchTerm}" could not be verified. Please check the ID and try again.
                </p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};