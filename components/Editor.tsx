'use client'

import { updateEntry } from '@/utils/api'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  const [analysis, useAnalysis] = useState(entry.analysis)

  const { mood, summary, color, subject, negative } = entry?.analysis
  const analysisData = [
    { name: 'Mood', value: mood },
    { name: 'Summary', value: summary },
    { name: 'Subject', value: subject },

    { name: 'Negative', value: negative ? 'True' : 'False' },
  ]


  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const data = await updateEntry(entry.id, _value)
      setAnalysis(data.analysis)
      setIsLoading(false)
    },
  })

  return (
    <div className="w-full h-full">
      {isLoading && <div>...loading</div>}
      <textarea
        className="w-full h-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>

    <div className='border border-black/10'>
    </div>
  )
}

export default Editor
