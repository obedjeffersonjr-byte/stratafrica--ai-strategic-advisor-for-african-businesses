export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin"></div>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        Generating Your Strategy
      </h3>
      <p className="text-slate-600 text-center max-w-xs">
        Our AI is analyzing your challenge using proven business frameworks...
      </p>
    </div>
  )
}