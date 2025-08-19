import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Target, Zap, TrendingUp } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const Dashboard = () => {
  const metrics = [
    { label: "Overall Accuracy", value: 94.8, color: "success" },
    { label: "Wheat Classification", value: 96.2, color: "agricultural" },
    { label: "Corn Classification", value: 93.7, color: "primary" },
    { label: "Rice Classification", value: 95.1, color: "satellite" }
  ];

  const recentResults = [
    { id: "IMG_001", type: "Wheat", confidence: 96.8, area: "245 hectares" },
    { id: "IMG_002", type: "Corn", confidence: 94.2, area: "180 hectares" },
    { id: "IMG_003", type: "Rice", confidence: 97.5, area: "320 hectares" },
    { id: "IMG_004", type: "Forest", confidence: 99.1, area: "150 hectares" }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Analytics Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor classification performance and analyze agricultural patterns with our comprehensive dashboard
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Dashboard Preview */}
          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-satellite" />
                <CardTitle>Live Classification Results</CardTitle>
              </div>
              <CardDescription>
                Real-time visualization of satellite imagery analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <img 
                src={dashboardImage} 
                alt="Classification Dashboard"
                className="w-full h-64 object-cover"
              />
            </CardContent>
          </Card>
          
          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-success" />
                <CardTitle>Model Performance</CardTitle>
              </div>
              <CardDescription>
                Current classification accuracy across different land types
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {metrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{metric.label}</span>
                    <Badge variant="secondary">{metric.value}%</Badge>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Recent Classifications */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-accent" />
                <CardTitle>Recent Classifications</CardTitle>
              </div>
              <CardDescription>
                Latest satellite image analysis results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentResults.map((result) => (
                  <div key={result.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-medium">{result.id}</div>
                      <div className="text-sm text-muted-foreground">{result.area}</div>
                    </div>
                    <div className="text-right">
                      <Badge className="mb-1">{result.type}</Badge>
                      <div className="text-sm text-muted-foreground">{result.confidence}% confidence</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Key Statistics */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                <CardTitle>Key Statistics</CardTitle>
              </div>
              <CardDescription>
                Overall system performance and usage metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-agricultural/10 rounded-lg border border-agricultural/20">
                    <div className="text-2xl font-bold text-agricultural">1,247</div>
                    <div className="text-sm text-muted-foreground">Images Processed</div>
                  </div>
                  <div className="text-center p-4 bg-satellite/10 rounded-lg border border-satellite/20">
                    <div className="text-2xl font-bold text-satellite">15.2K</div>
                    <div className="text-sm text-muted-foreground">Hectares Analyzed</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                    <div className="text-2xl font-bold text-success">94.8%</div>
                    <div className="text-sm text-muted-foreground">Avg Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="text-2xl font-bold text-accent">2.3s</div>
                    <div className="text-sm text-muted-foreground">Avg Processing</div>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">Active Learning Enabled</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Continuously improving with human feedback
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;