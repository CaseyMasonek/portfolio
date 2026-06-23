import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

export default function TechIcon({ imageUrl, techName }: { imageUrl: string, techName: string }) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <img src={imageUrl} className="h-8" />
                </TooltipTrigger>
                <TooltipContent>
                    <p>{techName}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}