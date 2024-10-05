"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const missionPhases = [
  {
    title: "Launch and Ascent",
    description: "The Orion spacecraft launches atop the powerful Space Launch System (SLS) rocket from Kennedy Space Center in Florida.",
    details: "This phase marks the beginning of the Artemis II mission, with the crew experiencing up to 4G's of force as they ascend through Earth's atmosphere.",
    tooltip: "Liftoff and initial ascent phase"
  },
  {
    title: "Earth Orbit and Trans-Lunar Injection",
    description: "Orion enters Earth orbit and performs systems checks before the trans-lunar injection burn.",
    details: "The spacecraft will orbit Earth twice, allowing the crew to check all systems. Then, the upper stage of the SLS will reignite to send Orion towards the Moon.",
    tooltip: "Preparing for the journey to the Moon"
  },
  {
    title: "Outbound Trip to the Moon",
    description: "The crew travels towards the Moon, performing course corrections and scientific observations.",
    details: "During this 4-day journey, the astronauts will conduct experiments and prepare for the lunar flyby. They'll experience weightlessness and have a unique view of Earth.",
    tooltip: "Journey from Earth to the Moon"
  },
  {
    title: "Lunar Flyby",
    description: "Orion performs a close flyby of the Moon, using its gravity to slingshot towards Earth.",
    details: "The spacecraft will pass about 4,600 miles (7,400 km) from the Moon's surface. This maneuver will provide valuable data for future lunar missions and offer breathtaking views for the crew.",
    tooltip: "Closest approach to the Moon"
  },
  {
    title: "Return Trip and Splashdown",
    description: "The spacecraft journeys back to Earth, concluding with a splashdown in the Pacific Ocean.",
    details: "The return trip takes about 4 days. Upon reentry into Earth's atmosphere, Orion will experience temperatures up to 5,000°F (2,760°C) before splashing down off the coast of California.",
    tooltip: "Journey back to Earth and mission conclusion"
  }
]

export default function Timeline() {
  const [activePhase, setActivePhase] = useState(0)

  return (
    <TooltipProvider>
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>NASA Artemis II Mission Timeline</CardTitle>
          <CardDescription>Explore the 5 phases of humanity's return to the Moon</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-6 md:mb-0">
              {missionPhases.map((phase, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div 
                      className={cn(
                        "flex mb-8 last:mb-0 cursor-pointer transition-colors",
                        activePhase === index ? "text-primary" : "text-muted-foreground hover:text-primary"
                      )}
                      onClick={() => setActivePhase(index)}
                    >
                      <div className="flex flex-col items-center mr-4">
                        <div
                          className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                            activePhase === index ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          )}
                        >
                          {index + 1}
                        </div>
                        {index < missionPhases.length - 1 && (
                          <div className="w-0.5 h-full bg-muted mt-2" />
                        )}
                      </div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold">{phase.title}</h3>
                        {activePhase === index && <ChevronRight className="ml-2 h-4 w-4" />}
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{phase.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-4 md:border-l">
              <h4 className="text-xl font-semibold mb-2">{missionPhases[activePhase].title}</h4>
              <p className="text-muted-foreground mb-4">{missionPhases[activePhase].description}</p>
              <p>{missionPhases[activePhase].details}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}