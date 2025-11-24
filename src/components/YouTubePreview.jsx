"use client"

export default function YouTubePreview({ content }) {
  const youtubeRegex = /\[YouTube: ([a-zA-Z0-9_-]{11})\]/g
  const matches = [...content.matchAll(youtubeRegex)]

  if (matches.length === 0) return null

  return (
    <div className="space-y-4 p-4 bg-cream rounded border border-warm-beige">
      <h3 className="text-sm font-bold text-charcoal">YouTube Videos Preview</h3>
      {matches.map((match, idx) => (
        <iframe
          key={idx}
          width="100%"
          height="250"
          src={`https://www.youtube.com/embed/${match[1]}`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded"
        />
      ))}
    </div>
  )
}
