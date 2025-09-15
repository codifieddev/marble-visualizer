import { Button } from "@/components/ui/button";


const Hero = () => {
  return (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-400 via-white to-yellow-700">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/assets/marble/hero-marble.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-700/40 via-white/10 to-marble-charcoal/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-marble-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Revive Your Marble's
          <span className="block bg-gradient-gold bg-clip-text text-transparent">
            Timeless Beauty
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-marble-gray-light">
          Expert marble restoration and renovation services that transform your surfaces 
          into stunning masterpieces. Premium craftsmanship, guaranteed results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:shadow-gold transition-all duration-300 text-marble-charcoal font-semibold px-8 py-4 text-lg"
          >
            Get Free Quote
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-marble-white text-marble-white hover:bg-marble-white hover:text-marble-charcoal transition-all duration-300 px-8 py-4 text-lg"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;