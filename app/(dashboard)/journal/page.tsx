// react server component

import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '../../../utils/db'
import NewEntryCard from '@/components/NewEntryCard'
import EntryCard from '@/components/EntryCard'
import Link from 'next/link'

const getEntries = async () => {
  const user = await getUserByClerkID()
  const entries = await prisma.journalEntry.findMany({
    where:{
      userId: user.id,
    },
    orderBy:{
      createdAt: 'desc'
    },
  })
  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()

  return (
    <div>
      <h2 className='p-10 bg-zinc-400/10 h-full'>Journal</h2>
      <div className='grid grid-cols-3 gap-4 p-10'>
        <NewEntryCard />
        {entries.map((entry) => (
          <div key={entry.id}>
            <Link href={`/journal/${entry.id}`}>
              <EntryCard entry={entry} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JournalPage
