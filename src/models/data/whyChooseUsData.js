import { Shield, Award, Heart, Laptop } from 'lucide-react';

export const whyChooseUsData = [
  {
    id: "confidentiality",
    iconName: "Shield", // Expose as name so View resolves it without bundling components in Model
    title: "Confidential Counseling",
    description: "Your privacy is our absolute priority. We provide secure channels and optionally allow you to keep your identity fully protected."
  },
  {
    id: "experts",
    iconName: "Award",
    title: "Expert Psychologists",
    description: "Our therapists are board-certified, experienced, and specialize in diverse areas of mental health care."
  },
  {
    id: "empathy",
    iconName: "Heart",
    title: "Empathetic Support",
    description: "Experience a judgment-free space designed to help you feel heard, validated, and genuinely cared for."
  },
  {
    id: "flexibility",
    iconName: "Laptop",
    title: "Flexible Online Sessions",
    description: "Access professional support from the comfort of your home, with session timings suited to your busy schedule."
  }
];

export default whyChooseUsData;
