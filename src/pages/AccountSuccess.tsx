import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const AccountSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-6">
      <Card className="shadow-elegant max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-foreground">Congratulations!</CardTitle>
          <CardDescription>
            You have successfully created an account in Harvest Hub. Thank you!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            Welcome to the Harvest Hub network. You can now start tracking agricultural produce 
            from farm to consumer with complete transparency.
          </p>
          
          <div className="flex flex-col space-y-2">
            <Button asChild className="bg-gradient-primary text-primary-foreground shadow-elegant">
              <Link to="/dashboard">
                <Home className="mr-2 h-4 w-4" />
                Go to Dashboard
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountSuccess;