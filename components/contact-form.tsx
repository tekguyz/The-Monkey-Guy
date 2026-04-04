'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Upload } from 'lucide-react';

export function ContactForm() {
  const [selectedService, setSelectedService] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('service') || '';
    }
    return '';
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  useEffect(() => {
    // Listen for custom event from ServicesGrid
    const handleServiceSelected = (e: any) => {
      setSelectedService(e.detail);
    };

    window.addEventListener('service-selected', handleServiceSelected);
    return () => window.removeEventListener('service-selected', handleServiceSelected);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error("Submission failed with status:", response.status);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-safety-vivid rounded-full flex items-center justify-center mb-6 shadow-xl shadow-safety-vivid/20">
          <CheckCircle2 className="w-10 h-10 text-bark-slate" />
        </div>
        <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-4">Estimate Request Sent</h3>
        <p className="text-white/70 text-lg max-w-md leading-relaxed">
          We&apos;ll text you at <span className="text-safety-vivid font-bold">(954) 882-4836</span> shortly to confirm your assessment.
        </p>
      </div>
    );
  }

  return (
    <form 
      name="monkey-guy-estimate" 
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="monkey-guy-estimate" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-white/60 tracking-widest">Full Name</label>
          <input 
            type="text" 
            name="full_name"
            required
            className="w-full bg-forest-deep border border-white/10 p-4 rounded-sm focus:border-safety-vivid outline-none transition-colors" 
            placeholder="Full Name" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-white/60 tracking-widest">Phone Number</label>
          <input 
            type="tel" 
            name="phone_number"
            required
            className="w-full bg-forest-deep border border-white/10 p-4 rounded-sm focus:border-safety-vivid outline-none transition-colors" 
            placeholder="(954) 882-4836" 
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold text-white/60 tracking-widest">Address</label>
        <input 
          type="text" 
          name="address"
          className="w-full bg-forest-deep border border-white/10 p-4 rounded-sm focus:border-safety-vivid outline-none transition-colors" 
          placeholder="123 Main St, Fort Lauderdale, FL" 
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold text-white/60 tracking-widest">Service Required</label>
        <select 
          name="service_type"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="w-full bg-forest-deep border border-white/10 p-4 rounded-sm focus:border-safety-vivid outline-none transition-colors appearance-none"
        >
          <option value="">Select a Service</option>
          <option value="tree-removal">Tree Removal</option>
          <option value="tree-trimming">Tree Trimming</option>
          <option value="stump-removal">Stump Removal</option>
          <option value="emergency-tree-service">Emergency Tree Service</option>
          <option value="lawn-care">Lawn Care</option>
          <option value="mulch">Mulch</option>
          <option value="tree-planting">Tree Planting</option>
          <option value="planting">Planting</option>
          <option value="sod-installation">Sod Installation</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold text-white/60 tracking-widest">Upload Tree Photo (Optional)</label>
        <div className="relative group">
          <input 
            type="file" 
            name="tree_photo"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            accept="image/*"
          />
          <div className="w-full bg-forest-deep border border-dashed border-white/20 p-6 rounded-sm flex flex-col items-center justify-center gap-2 group-hover:border-safety-vivid transition-colors">
            <Upload className="w-6 h-6 text-white/40 group-hover:text-safety-vivid transition-colors" />
            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
              {fileName || "Drag & Drop or Click to Upload"}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold text-white/60 tracking-widest">Message</label>
        <textarea 
          name="message"
          className="w-full bg-forest-deep border border-white/10 p-4 rounded-sm focus:border-safety-vivid outline-none transition-colors h-32" 
          placeholder="Describe the job..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-safety-vivid text-bark-slate py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-safety-vivid/20"
      >
        {isSubmitting ? "Sending Request..." : "Submit Request"}
      </button>
    </form>
  );
}
