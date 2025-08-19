import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Image, Cpu, FileText } from "lucide-react";

const supportedFormats = ["JPEG", "PNG", "TIFF", "GeoTIFF"];
const landTypes = ["Wheat", "Corn", "Rice", "Non-crop", "Urban", "Forest"];

const UploadSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Start Your Analysis
            </h2>
            <p className="text-xl text-muted-foreground">
              Upload satellite imagery to begin automated agricultural land classification
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Upload Interface */}
            <Card className="border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 rounded-full bg-primary/10 border border-primary/20 w-fit mb-4">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Upload Satellite Images</CardTitle>
                <CardDescription>
                  Drag and drop your satellite imagery files or click to browse
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center">
                <Button size="lg" className="mb-6">
                  <Image className="w-5 h-5 mr-2" />
                  Choose Files
                </Button>
                
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <strong>Supported Formats:</strong>
                    <div className="flex flex-wrap gap-2 mt-2 justify-center">
                      {supportedFormats.map((format) => (
                        <Badge key={format} variant="secondary">{format}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <strong>Max File Size:</strong> 50MB per image
                  </div>
                  
                  <div>
                    <strong>Recommended:</strong> High-resolution agricultural areas
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Processing Info */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="w-6 h-6 text-satellite" />
                  <CardTitle>AI Processing Pipeline</CardTitle>
                </div>
                <CardDescription>
                  Your images will be processed through our advanced AI pipeline
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">Image quality enhancement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-satellite" />
                    <span className="text-sm">Feature extraction & analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-agricultural" />
                    <span className="text-sm">Land type classification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    <span className="text-sm">Confidence scoring</span>
                  </div>
                </div>
                
                <div>
                  <strong className="text-sm font-medium">Detectable Land Types:</strong>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {landTypes.map((type) => (
                      <Badge key={type} variant="outline" className="text-xs">{type}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sample Results Preview */}
          <Card className="bg-gradient-to-r from-primary/5 to-satellite/5 border-primary/20">
            <CardHeader className="text-center">
              <div className="flex items-center gap-3 justify-center mb-2">
                <FileText className="w-6 h-6 text-satellite" />
                <CardTitle>Expected Results</CardTitle>
              </div>
              <CardDescription>
                Get detailed classification reports and confidence scores for each detected land type
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-agricultural">42%</div>
                  <div className="text-sm text-muted-foreground">Wheat Fields</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">28%</div>
                  <div className="text-sm text-muted-foreground">Corn Fields</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-satellite">18%</div>
                  <div className="text-sm text-muted-foreground">Rice Paddies</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;