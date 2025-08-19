import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Zap, Brain, TrendingUp, CheckCircle } from "lucide-react";
import superResolutionImage from "@/assets/super-resolution.jpg";

const features = [
  {
    icon: Database,
    title: "Data Preparation",
    description: "Comprehensive satellite image datasets from Radiant Earth Foundation, Google Earth Engine, and EuroSAT for robust training.",
    details: [
      "Multi-source satellite imagery",
      "Automated labeling workflows",
      "Quality assurance pipelines",
      "Format standardization"
    ],
    color: "primary"
  },
  {
    icon: Zap,
    title: "Super-Resolution Enhancement",
    description: "ESRGAN-powered image enhancement improves satellite imagery clarity for better feature recognition and classification accuracy.",
    details: [
      "Real-ESRGAN implementation",
      "4x resolution upscaling",
      "Edge preservation",
      "Noise reduction"
    ],
    color: "satellite",
    image: superResolutionImage
  },
  {
    icon: Brain,
    title: "Active Learning",
    description: "Intelligent uncertainty sampling prioritizes low-confidence predictions for human review, continuously improving model performance.",
    details: [
      "Confidence-based sampling",
      "Human-in-the-loop workflow",
      "Iterative model refinement",
      "Reduced labeling effort"
    ],
    color: "accent"
  },
  {
    icon: TrendingUp,
    title: "Model Training",
    description: "CNN-based classification trained on labeled satellite images to identify wheat, corn, rice, and other agricultural land types.",
    details: [
      "Deep CNN architecture",
      "Transfer learning",
      "Multi-class classification",
      "Cross-validation"
    ],
    color: "agricultural"
  },
  {
    icon: CheckCircle,
    title: "Model Evaluation",
    description: "Comprehensive performance metrics including accuracy, precision, recall, and visual confusion matrices for model assessment.",
    details: [
      "Accuracy metrics",
      "Precision & recall analysis",
      "Confusion matrix visualization",
      "Performance benchmarking"
    ],
    color: "success"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete Agricultural AI Pipeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive solution combines cutting-edge AI techniques for accurate satellite imagery classification
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-3 rounded-full bg-${feature.color}/10 border border-${feature.color}/20`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {feature.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${feature.color}`} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;