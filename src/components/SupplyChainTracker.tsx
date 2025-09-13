import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, Truck, Package, MapPin, Thermometer } from "lucide-react";

const mockProduct = {
  id: "AGR-2024-001",
  name: "Organic Tomatoes",
  currentStage: "In Transit",
  stages: [
    {
      id: 1,
      name: "Farm Harvest",
      status: "completed",
      date: "2024-01-15",
      location: "Green Valley Farm, CA",
      temperature: "18°C",
      details: "Harvested by certified organic farmer John Smith",
      verified: true
    },
    {
      id: 2,
      name: "Quality Check",
      status: "completed",
      date: "2024-01-15",
      location: "Farm Quality Lab",
      temperature: "16°C",
      details: "Passed organic certification and quality standards",
      verified: true
    },
    {
      id: 3,
      name: "Distribution Center",
      status: "current",
      date: "2024-01-16",
      location: "Central Distribution Hub",
      temperature: "14°C",
      details: "Currently in cold storage, awaiting transport",
      verified: true
    },
    {
      id: 4,
      name: "Retail Store",
      status: "pending",
      date: "2024-01-17",
      location: "Fresh Market Store",
      temperature: "",
      details: "Scheduled for delivery",
      verified: false
    }
  ]
};

export const SupplyChainTracker = () => {
  return (
    <div className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Product Journey</CardTitle>
              <CardDescription>
                Tracking ID: {mockProduct.id} - {mockProduct.name}
              </CardDescription>
            </div>
            <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
              {mockProduct.currentStage}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {mockProduct.stages.map((stage, index) => (
              <div key={stage.id} className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      stage.status === "completed"
                        ? "bg-success text-success-foreground"
                        : stage.status === "current"
                        ? "bg-warning text-warning-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {stage.status === "completed" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : stage.status === "current" ? (
                      <Clock className="w-5 h-5" />
                    ) : (
                      <Package className="w-5 h-5" />
                    )}
                  </div>
                  {index < mockProduct.stages.length - 1 && (
                    <div className="w-0.5 h-16 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <Card className="shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{stage.name}</h4>
                        <div className="flex items-center space-x-2">
                          {stage.verified && (
                            <Badge variant="outline" className="text-success border-success">
                              Verified
                            </Badge>
                          )}
                          <span className="text-sm text-muted-foreground">{stage.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{stage.location}</span>
                        </div>
                        {stage.temperature && (
                          <div className="flex items-center space-x-1">
                            <Thermometer className="w-4 h-4" />
                            <span>{stage.temperature}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-foreground">{stage.details}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};