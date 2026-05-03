export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="text-muted-foreground">Page not found</p>
        <a href="/" className="mt-6 inline-block text-primary hover:underline">Go home</a>
      </div>
    </div>
  );
}
