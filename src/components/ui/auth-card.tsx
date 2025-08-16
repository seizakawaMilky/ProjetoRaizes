import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function AuthCard({ children, className }: AuthCardProps) {
  return (
    <div className="min-h-screen bg-gradient-main flex items-center justify-center px-4">
      <Card className={cn("w-full max-w-md shadow-card", className)}>
        <CardHeader className="space-y-1">
          {children}
        </CardHeader>
      </Card>
    </div>
  );
}

export function AuthCardContent({ children }: { children: React.ReactNode }) {
  return (
    <CardContent className="space-y-4">
      {children}
    </CardContent>
  );
}