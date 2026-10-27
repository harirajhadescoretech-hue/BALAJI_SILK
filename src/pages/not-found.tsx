import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="w-full max-w-md mx-4 rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="flex mb-4 gap-3 items-center">
          <AlertCircle className="h-8 w-8 text-destructive shrink-0" />
          <h1 className="text-2xl font-bold text-foreground">404 Page Not Found</h1>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Did you forget to add the page to the router?
        </p>
      </div>
    </div>
  );
}
