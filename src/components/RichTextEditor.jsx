"use client"

import React from "react"

import { useState } from "react"
import { FaBold, FaItalic, FaHeading, FaListUl, FaLink, FaYoutube, FaUndo, FaRedo } from "react-icons/fa"

export default function RichTextEditor({ value, onChange, placeholder = "Write your content here..." }) {
  const [history, setHistory] = useState([])
  const [historyStep, setHistoryStep] = useState(-1)
  const textareaRef = React.useRef(null)

  const updateHistory = (newValue) => {
    const newHistory = history.slice(0, historyStep + 1)
    newHistory.push(newValue)
    setHistory(newHistory)
    setHistoryStep(newHistory.length - 1)
    onChange(newValue)
  }

  const applyFormatting = (before, after = "") => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end) || "text"
    const newValue = value.substring(0, start) + before + selectedText + after + value.substring(end)

    updateHistory(newValue)
    setTimeout(() => {
      textarea.selectionStart = start + before.length
      textarea.selectionEnd = start + before.length + selectedText.length
      textarea.focus()
    }, 0)
  }

  const insertYoutubeLink = () => {
    const url = prompt("Enter YouTube URL or Video ID:")
    if (url) {
      const videoId = url.includes("youtube.com") ? url.split("v=")[1]?.split("&")[0] : url
      if (videoId) {
        applyFormatting(`\n[YouTube: ${videoId}]\n`)
      }
    }
  }

  const undo = () => {
    if (historyStep > 0) {
      setHistoryStep(historyStep - 1)
      onChange(history[historyStep - 1])
    }
  }

  const redo = () => {
    if (historyStep < history.length - 1) {
      setHistoryStep(historyStep + 1)
      onChange(history[historyStep + 1])
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2 bg-cream p-3 rounded border border-warm-beige">
        <button
          type="button"
          onClick={() => applyFormatting("**", "**")}
          title="Bold"
          className="p-2 hover:bg-warm-beige rounded transition-all"
        >
          <FaBold className="text-charcoal" />
        </button>
        <button
          type="button"
          onClick={() => applyFormatting("_", "_")}
          title="Italic"
          className="p-2 hover:bg-warm-beige rounded transition-all"
        >
          <FaItalic className="text-charcoal" />
        </button>
        <button
          type="button"
          onClick={() => applyFormatting("## ", "")}
          title="Heading"
          className="p-2 hover:bg-warm-beige rounded transition-all"
        >
          <FaHeading className="text-charcoal" />
        </button>
        <button
          type="button"
          onClick={() => applyFormatting("\n- ", "")}
          title="Bullet List"
          className="p-2 hover:bg-warm-beige rounded transition-all"
        >
          <FaListUl className="text-charcoal" />
        </button>
        <button
          type="button"
          onClick={() => applyFormatting("[Link](", ")")}
          title="Link"
          className="p-2 hover:bg-warm-beige rounded transition-all"
        >
          <FaLink className="text-charcoal" />
        </button>
        <button
          type="button"
          onClick={insertYoutubeLink}
          title="YouTube Video"
          className="p-2 hover:bg-warm-beige rounded transition-all"
        >
          <FaYoutube className="text-red-600" />
        </button>
        <div className="border-l border-warm-beige mx-1" />
        <button
          type="button"
          onClick={undo}
          disabled={historyStep <= 0}
          title="Undo"
          className="p-2 hover:bg-warm-beige rounded disabled:opacity-50 transition-all"
        >
          <FaUndo className="text-charcoal" />
        </button>
        <button
          type="button"
          onClick={redo}
          disabled={historyStep >= history.length - 1}
          title="Redo"
          className="p-2 hover:bg-warm-beige rounded disabled:opacity-50 transition-all"
        >
          <FaRedo className="text-charcoal" />
        </button>
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => updateHistory(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-warm-beige rounded focus:outline-none focus:border-accent-gold resize-vertical font-mono text-sm"
        rows="10"
      />
      <p className="text-xs text-sage">
        Tip: Use **text** for bold, _text_ for italic, ## for headings, and click YouTube button for video embeds
      </p>
    </div>
  )
}
