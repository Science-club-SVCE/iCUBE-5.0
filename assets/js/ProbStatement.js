const problemStatements = [
  {
    id: 1,
    title: "PS-01: Enhance Urban Living Through AI-Driven Traffic Management System",
    description: "Traffic congestion is a major issue in cities, causing delays and pollution. Your task is to create a system using AI and IoT to monitor traffic with sensors and cameras, analyze patterns, and optimize signal timings. The system should provide live updates through an app or dashboard and suggest alternative routes to improve traffic flow."
  },
  {
    id: 2,
    title: "PS-02: Evaluating and Enhancing Electric Vehicle Sustainability",
    description: "Electric vehicles are considered a cleaner alternative, but their long-term sustainability remains uncertain. The task is to analyze environmental impacts focusing on battery lifecycle, recycling, and disposal, and propose solutions to enhance EV sustainability."
  },
  {
    id: 3,
    title: "PS-03: Smart Campus Management Solution",
    description: "Develop a technology-driven campus management solution using IoT, mobile applications, or data analytics to improve energy usage, attendance systems, navigation, or overall campus efficiency."
  },
  {
    id: 4,
    title: "PS-04: Disaster Resilient Infrastructure Monitoring System",
    description: "Design an IoT- and AI-based system to continuously monitor infrastructure such as bridges and buildings, predict failures, and provide early warnings to reduce disaster risks."
  },
  {
    id: 5,
    title: "PS-05: Agriculture Drone for Sustainable Farming Practices",
    description: "Design a drone-based precision farming system to monitor crop health, detect pests, optimize water and fertilizer usage, and support sustainable agriculture."
  },
  {
    id: 6,
    title: "PS-06: AI-Powered Platform for Mental Health and Well-being",
    description: "Develop an AI-powered platform that supports mental health awareness and early detection of anxiety or depression using mood tracking, text, or voice analysis, along with virtual support tools."
  },
  {
    id: 7,
    title: "PS-07: Blockchain-Powered Decentralized Identity Verification Platform",
    description: "Create a blockchain-based decentralized identity verification system that ensures secure, tamper-proof, and privacy-preserving identity management."
  },
  {
    id: 8,
    title: "PS-08: Efficient Energy Storage for Remote Locations Using Alternative Sources",
    description: "Design a compact, safe, and efficient energy storage solution for renewable energy sources suitable for remote locations with inconsistent power availability."
  },
  {
    id: 9,
    title: "PS-09: AI-Based Real-Time Threat Detection System",
    description: "Develop an AI-powered system to detect phishing websites, malicious emails, and cyber threats in real time and provide immediate alerts."
  },
  {
    id: 10,
    title: "PS-10: Smart Traffic Management System for Smart Cities",
    description: "Design an IoT- and AI-based traffic management system that gathers real-time data, predicts congestion, optimizes signals, and suggests alternate routes."
  },
  {
    id: 11,
    title: "PS-11: AI-Based Crop Disease Detection and Remedy System",
    description: "Develop an AI system using smartphone images to detect crop diseases, identify disease types, and suggest appropriate remedies for farmers."
  },
  {
    id: 12,
    title: "PS-12: Adaptive Lighting System for Night Driving Safety",
    description: "Design an adaptive vehicle lighting system that adjusts headlight intensity and direction based on speed, road curvature, and surrounding traffic."
  },
  {
    id: 13,
    title: "PS-13: Disaster Management System Using IoT and AI",
    description: "Develop an IoT- and AI-based disaster alert and response system that predicts impact, sends real-time alerts, and optimizes resource allocation."
  },
  {
    id: 14,
    title: "PS-14: AI-Powered Self-Watering and Plant Health Monitoring System",
    description: "Design an automated system that waters plants based on soil moisture and monitors plant health using image analysis."
  },
  {
    id: 15,
    title: "PS-15: Safe and Economic Hazardous Waste Disposal and Recycling Methodology",
    description: "Propose a safe, economical, and environmentally compliant method for hazardous waste disposal or recycling."
  },
  {
    id: 16,
    title: "PS-16: AI-Driven Carbon Emission Tracking and Reduction Tool",
    description: "Develop an AI-based tool to track vehicle emissions in real time and provide eco-friendly driving recommendations."
  },
  {
    id: 17,
    title: "PS-17: Predictive Maintenance System for Commercial Vehicles ",
    description: "Design an IoT- and ML-based system to predict maintenance needs of commercial vehicles and reduce breakdowns."
  },
  {
    id: 18,
    title: "PS-18: Blockchain-Based Voting System for Secure Elections",
    description: "Design a blockchain-based electronic voting system that ensures secure, transparent, and tamper-proof elections."
  },
  {
    id: 19,
    title: "PS-19: AI-Driven Library Management System",
    description: "Develop an AI-powered library system that automates book classification, enables natural language search, and improves user experience."
  },
  {
    id: 20,
    title: "PS-20: Conversational Agent for Legal Advice Using Prompt Engineering",
    description: "Build a conversational AI agent using large language models to provide accurate and context-aware legal guidance."
  },
  {
    id: 21,
    title: "PS-21: Elderly Care Solutions Platform",
    description: "Develop a platform connecting elderly individuals with caregivers to assist with daily needs such as medication reminders and companionship."
  },
  {
    id: 22,
    title: "PS-22: Stem Cell-Based Treatment Delivery Device for Infectious Diseases",
    description: "Design a medical device that delivers stem cell-based treatments precisely to infected areas for improved therapeutic outcomes."
  },
  {
    id: 23,
    title: "PS-23: IoT-Based Network Traffic Management System",
    description: "Design an IoT-based system to monitor and optimize network data flow, predict failures, and improve reliability."
  },
  {
    id: 24,
    title: "PS-24: Smart Sensors for Predictive Maintenance in Industries",
    description: "Develop a smart sensor system that predicts industrial equipment failures using AI and real-time data."
  },
  {
    id: 25,
    title: "PS-25: Smart Grid Technology and Integration",
    description: "Design a smart grid system integrating renewable energy sources with real-time monitoring and dynamic load balancing."},
  {
    id: 26,
    title: "PS-26: Advanced Signal Processing for Healthcare Diagnostics",
    description: "Develop advanced signal processing techniques to improve accuracy of medical diagnostics such as ECG, EEG, or MRI."},
  {
    id: 27,
    title: "PS-27: Development of Organoids Using 3D Bioprinting",
    description: "Design a methodology using 3D bioprinting to develop functional organoids for medical research and drug testing."
  },
  {
    id: 28,
    title: "PS-28: Sustainable Urban Drainage Systems (SUDS) ",
    description: "Design an innovative urban drainage system integrating green infrastructure and IoT-based monitoring."
  },
  {
    id: 29,
    title: "PS-29: IoT-Based Smart Metering System for Utilities",
    description: "Develop an IoT-based smart metering system for utilities to monitor consumption, detect anomalies, and improve efficiency."
  },
  {
    id: 30,
    title: "PS-30: Biodegradable Bio-Sorbent Device for Efficient Oil Spill Cleanup",
    description: "Design a device that deploys biodegradable bio-sorbents for efficient and environmentally friendly oil spill cleanup."
  }
];

// Function to toggle the list of problem statements
function toggleList() {
    const cardContainer = document.getElementById("card-container1");
    const icon = document.getElementById("one");

    // OPEN LIST
    if (!cardContainer.hasChildNodes()) {
        icon.textContent = "−";

        // Insert content
        problemStatements.forEach(ps => {
            const card = document.createElement("div");
            card.className = "cardx";

            card.innerHTML = `
    <div class="pss" onclick="toggleDescription(${ps.id})">
        <div style="flex:1;">
            ${ps.title}
        </div>
        <span class="ps-arrow" id="arrow-${ps.id}">▼</span>
    </div>
    <div class="ps-desc" id="desc-${ps.id}">
        ${ps.description}
    </div>
`;

            cardContainer.appendChild(card);
        });

        // Animate open
        cardContainer.style.height = "0px";
        const fullHeight = cardContainer.scrollHeight + "px";
        requestAnimationFrame(() => {
            cardContainer.style.height = fullHeight;
        });

    } 
    // CLOSE LIST (smooth)
    else {
        icon.textContent = "+";

        const fullHeight = cardContainer.scrollHeight + "px";
        cardContainer.style.height = fullHeight;

        requestAnimationFrame(() => {
            cardContainer.style.height = "0px";
        });

        // Remove content AFTER animation
        setTimeout(() => {
            cardContainer.innerHTML = "";
            cardContainer.style.height = "";
        }, 500); // match CSS transition time
    }
}


/* ===== ACCORDION TOGGLE ===== */
function toggleDescription(id) {
    const desc = document.getElementById(`desc-${id}`);
    const arrow = document.getElementById(`arrow-${id}`);

    const isOpen = desc.style.height && desc.style.height !== "0px";

    if (isOpen) {
        // Smooth close
        desc.style.height = desc.scrollHeight + "px"; // set current height
        requestAnimationFrame(() => {
            desc.style.height = "0px";
        });
        arrow.classList.remove("open");
    } else {
        // Smooth open
        desc.style.height = desc.scrollHeight + "px";
        arrow.classList.add("open");
    }
}
