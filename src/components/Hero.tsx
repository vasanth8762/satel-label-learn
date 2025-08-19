import { Button } from "@/components/ui/button";
import { Satellite, Upload, Brain, BarChart3 } from "lucide-react";
import heroImage from "@/assets/satellite-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
              <Satellite className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-satellite to-accent bg-clip-text text-transparent">
            Agricultural Land Classification
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Advanced satellite imagery analysis using AI-powered classification, super-resolution enhancement, and active learning for precise agricultural monitoring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <Upload className="w-5 h-5 mr-2" />
              Upload Satellite Images
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Demo Results
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Land Types</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-satellite">95%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-agricultural">AI</div>
              <div className="text-sm text-muted-foreground">Enhanced</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">Real-time</div>
              <div className="text-sm text-muted-foreground">Processing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;