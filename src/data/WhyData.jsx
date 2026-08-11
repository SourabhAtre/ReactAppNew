// SVG icons
const RadiantIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
);

const LabIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3h6M9 3v8L5.5 17A2 2 0 007 20h10a2 2 0 001.5-3L15 11V3" />
        <path d="M8 15h8" />
    </svg>
);

const ShippingIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12h13M3 12V8h13v8H3v-4z" />
        <path d="M16 8h3l2 4v4h-5V8z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
    </svg>
);

const GuaranteeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7L2 9l7-1 3-6z" />
    </svg>
);

// data for all 4 cards


export const featuresData = [
    {
        id: 1,
        icon: <RadiantIcon />,
        title: "Radiant Results",
        description: "NuanceGlow delivers noticeable results, ensuring your skin radiates health and vitality.",
    },
    {
        id: 2,
        icon: <LabIcon />,
        title: "Lab Tested & Proven",
        description: "Our products are meticulously tested, delivering proven results for your natural radiance.",
    },
    {
        id: 3,
        icon: <ShippingIcon />,
        title: "Free Shipping",
        description: "Free standard shipping on all U.S. orders.",
    },
    {
        id: 4,
        icon: <GuaranteeIcon />,
        title: "100% Guarantee",
        description: "If you're not satisfied at any time, we'll make it right. It's that simple.",
    },
];


export const AboutfeaturesData = [
    {
        id: 1,
        icon: <RadiantIcon />,
        title: "Innovative Formulations",
        description: "We push the boundaries of skincare innovation, ensuring our products stand at the forefront of industry advancements.",
    },
    {
        id: 2,
        icon: <LabIcon />,
        title: "Luxurious Experience",
        description: "Indulge in the opulence of NuanceGlow. Our products are not just skincare; they are a sensorial journey, a celebration of your beauty.",
    },
    {
        id: 3,
        icon: <ShippingIcon />,
        title: "Proven Results",
        description: "Backed by rigorous testing, NuanceGlow products deliver consistent, proven results, earning the trust of our discerning customers.",
    },
    {
        id: 4,
        icon: <GuaranteeIcon />,
        title: "Commitment to Sustainability",
        description: "NuanceGlow is more than just about beauty; it's about responsibility. We are committed to sustainable and eco-friendly practices, ensuring a brighter future for both your skin and the planet.",
    },
];
