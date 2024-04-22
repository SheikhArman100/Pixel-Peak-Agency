import { Globe } from "lucide-react";
import React from "react";

const SectionTitle = () => {
  return (
    <div className="glassEffect px-4 py-2 flex items-center gap-x-2">
      <Globe className="size-6" />
      <span className="body md:heading-6 font-medium">Services</span>
    </div>
  );
};

export default SectionTitle;
