'use client';

import React, { useRef } from 'react';
import Service from "@/Components/Services/Services_hero"
import ServiceSection from "@/Components/Services/Services_section"
import Wellbenifitssection from "@/Components/Services/Wellbenifitsection.jsx"
import HealthyLifeServices from "@/Components/Services/HealthyLifeServices"
import ProceduresSection from "@/Components/Services/ProcedureSection"
const Services=()=>{
    const sectionRef = useRef(null);
    return (
        <>
       <Service  scrollToRef={sectionRef}/>
       <ServiceSection  ref={sectionRef} />
       <Wellbenifitssection />
       <HealthyLifeServices />
       <ProceduresSection />
        </>
    )
}
export default Services