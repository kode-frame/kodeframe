import { Card, CardAction, CardContent, CardFooter, CardHeader, CardImage } from "@/components/ui/card"
import { TechStack } from "./types"
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  tech: TechStack[];
  link: string
}

export function PortfolioCard({ title, category, image, alt, description, tech = [], link }: PortfolioCardProps) {
  return (
    <Card
      variant="portfolio"
      size="full"
      rounded="2xl"
      hoverEffect="float"
    >
      <CardImage
        src={image}
        alt={alt}
        aspectRatio="wide"
        className="h-64"
      />
      <CardHeader
        title={title}
        subtitle={category}
        titleSize="lg"
      />
      {/* <CardContent>
        <p className="mb-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {tech.map((item, index) => (
            <div key={index} className="mt-2">
              <img 
                src={item.icon}
                alt={item.label}
                className="w-4 h-4 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </CardContent> */}
      <CardFooter justify="between">
        <CardAction variant="secondary" size="sm">
          View Details
        </CardAction>
        <CardAction variant="ghost" size="sm">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <ArrowUpRight />
          </Link>
        </CardAction>
      </CardFooter>
    </Card>
  )
}
