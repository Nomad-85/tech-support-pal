export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            Tech Support Pal is temporarily unavailable
          </h1>
          
          <div className="space-y-4 text-lg md:text-xl text-blue-800 leading-relaxed">
            <p>
              We are not currently accepting new appointments or service requests. Thank you for your understanding. We look forward to serving you again soon.
            </p>
            
            <p className="text-base md:text-lg text-blue-700">
              For general inquiries: <a href="mailto:support@techsupportpal.com" className="underline hover:text-blue-600">support@techsupportpal.com</a>
            </p>
          </div>
        </div>
        
        <footer className="pt-8 border-t border-blue-100">
          <p className="text-blue-600 text-sm">
            techsupportpal.com
          </p>
        </footer>
      </div>
    </div>
  )
}
