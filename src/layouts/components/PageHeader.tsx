import { Waves } from "@/components/ui/waves";

interface PageHeaderProps {
  
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({  title, description, className = "" }: PageHeaderProps) {
  return (
    <section className={`relative py-16 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-body">
        <Waves 
          lineColor="rgba(13, 148, 136, 0.2)" // Subtle teal color for waves
          backgroundColor="transparent"
          waveSpeedX={0.015}
          waveSpeedY={0.005}
          waveAmpX={25}
          waveAmpY={10}
          friction={0.95}
          tension={0.005}
          maxCursorMove={50}
          xGap={15}
          yGap={40}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
         
          <h1 className="text-4xl font-bold text-neverguilt-dark mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-gray-600 text-lg mb-8">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}